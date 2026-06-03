// Safe localStorage access wrapper for Next.js SSR
const isClient = typeof window !== 'undefined';

const KEYS = {
  BOOKMARKS: 'mapfuture_bookmarks',
  SEARCH_HISTORY: 'mapfuture_search_history',
  PAGE_VISITS: 'mapfuture_page_visits',
  CERT_CLICKS: 'mapfuture_cert_clicks',
  USER_INTERESTS: 'mapfuture_user_interests',
  USER_INTENT: 'mapfuture_user_intent',
  WAITLIST_EMAILS: 'mapfuture_waitlist_emails',
};

// Get item helper
const getLocal = <T>(key: string, fallback: T): T => {
  if (!isClient) return fallback;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    console.error('Error reading localStorage key:', key, e);
    return fallback;
  }
};

// Set item helper
const setLocal = <T>(key: string, value: T): void => {
  if (!isClient) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error writing localStorage key:', key, e);
  }
};

// 1. Bookmarks Manager
export const getBookmarks = (): string[] => getLocal<string[]>(KEYS.BOOKMARKS, []);

export const toggleBookmark = (careerId: string): boolean => {
  const current = getBookmarks();
  const index = current.indexOf(careerId);
  let isAdded = false;
  
  if (index > -1) {
    current.splice(index, 1);
  } else {
    current.push(careerId);
    isAdded = true;
    // Track desired career when bookmarked
    trackDesiredCareer(careerId);
  }
  
  setLocal(KEYS.BOOKMARKS, current);
  return isAdded;
};

export const isBookmarked = (careerId: string): boolean => {
  return getBookmarks().includes(careerId);
};

// 2. Search History
export const getSearchHistory = (): string[] => getLocal<string[]>(KEYS.SEARCH_HISTORY, []);

export const trackSearch = (query: string): void => {
  if (!query.trim()) return;
  const current = getSearchHistory();
  const cleanQuery = query.trim().toLowerCase();
  
  // Filter out duplicates and limit to last 10 searches
  const filtered = [cleanQuery, ...current.filter(q => q !== cleanQuery)].slice(0, 10);
  setLocal(KEYS.SEARCH_HISTORY, filtered);
};

// 3. Page Visits Tracker
export const getPageVisits = (): Record<string, number> => getLocal<Record<string, number>>(KEYS.PAGE_VISITS, {});

export const trackPageVisit = (careerId: string): void => {
  const current = getPageVisits();
  current[careerId] = (current[careerId] || 0) + 1;
  setLocal(KEYS.PAGE_VISITS, current);
};

// 4. Certification Clicks Tracker
export const getCertClicks = (): Record<string, number> => getLocal<Record<string, number>>(KEYS.CERT_CLICKS, {});

export const trackCertClick = (careerId: string, certTitle: string): void => {
  const current = getCertClicks();
  const clickKey = `${careerId}:${certTitle}`;
  current[clickKey] = (current[clickKey] || 0) + 1;
  setLocal(KEYS.CERT_CLICKS, current);
};

// 5. User Interests Selector
export const getUserInterests = (): string[] => getLocal<string[]>(KEYS.USER_INTERESTS, []);

export const toggleUserInterest = (interest: string): boolean => {
  const current = getUserInterests();
  const index = current.indexOf(interest);
  let isAdded = false;
  
  if (index > -1) {
    current.splice(index, 1);
  } else {
    current.push(interest);
    isAdded = true;
  }
  
  setLocal(KEYS.USER_INTERESTS, current);
  return isAdded;
};

// 6. User Intent (Desired Career & Learning Path Preference)
export interface UserIntent {
  desiredCareers: string[];
  preferredLearningPath: string; // e.g., 'academic', 'self-paced', 'hands-on'
}

export const getUserIntent = (): UserIntent => {
  return getLocal<UserIntent>(KEYS.USER_INTENT, {
    desiredCareers: [],
    preferredLearningPath: 'self-paced',
  });
};

export const trackDesiredCareer = (careerId: string): void => {
  const current = getUserIntent();
  if (!current.desiredCareers.includes(careerId)) {
    current.desiredCareers.push(careerId);
    setLocal(KEYS.USER_INTENT, current);
  }
};

export const setPreferredLearningPath = (path: string): void => {
  const current = getUserIntent();
  current.preferredLearningPath = path;
  setLocal(KEYS.USER_INTENT, current);
};

// 7. Email waitlist Log
export const getWaitlistEmails = (): string[] => getLocal<string[]>(KEYS.WAITLIST_EMAILS, []);

export const submitWaitlistEmail = (email: string): boolean => {
  if (!email || !email.includes('@')) return false;
  const current = getWaitlistEmails();
  
  if (!current.includes(email)) {
    current.push(email);
    setLocal(KEYS.WAITLIST_EMAILS, current);
    return true;
  }
  return false;
};

// 8. Debug/Analytics summary helper
export interface AnalyticsSummary {
  bookmarksCount: number;
  recentSearches: string[];
  totalPageVisits: number;
  popularCerts: { key: string; clicks: number }[];
  selectedInterests: string[];
  preferredPath: string;
}

export const getAnalyticsSummary = (): AnalyticsSummary => {
  const bookmarks = getBookmarks();
  const searches = getSearchHistory();
  const visits = getPageVisits();
  const certs = getCertClicks();
  const interests = getUserInterests();
  const intent = getUserIntent();
  
  const totalVisits = Object.values(visits).reduce((a, b) => a + b, 0);
  const popularCerts = Object.entries(certs).map(([key, clicks]) => ({ key, clicks })).sort((a, b) => b.clicks - a.clicks);
  
  return {
    bookmarksCount: bookmarks.length,
    recentSearches: searches,
    totalPageVisits: totalVisits,
    popularCerts: popularCerts,
    selectedInterests: interests,
    preferredPath: intent.preferredLearningPath,
  };
};
