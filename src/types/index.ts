export interface Skill {
  name: string;
  category: 'Technical' | 'Tool' | 'Soft' | 'Foundational';
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  importance: number; // 1 to 5 rating
}

export interface RoadmapStep {
  phase: string; // e.g., "Phase 1"
  title: string; 
  duration: string; 
  description: string;
  skillsToLearn: string[];
  projectsToBuild: string[];
  milestones: string[];
}

export interface Certification {
  title: string;
  provider: string;
  url: string;
  duration: string; // e.g., "3-6 Months"
  cost: string; // e.g., "$39/month"
  isFree: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  hasCertificate: boolean;
  description: string;
  whyTakeIt: string;
}

export interface CareerProject {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string; // e.g., "15 hours"
  techStack: string[];
  keyFeatures: string[];
  stepByStep: string[];
  deliverable: string;
}

export interface PlatformGuide {
  name: string;
  description: string;
  tips: string[];
}

export interface PortfolioGuide {
  overview: string;
  platforms: PlatformGuide[];
  resumeTips: string[];
  checklist: string[];
}

export interface BeginnerConfidence {
  beginnerScore: number; // out of 100
  learningCurveDescription: string;
  recommendedPriorKnowledge: string;
  suggestedWeeklyCommitment: string;
  timeToJobReady: string; // e.g. "6 months"
}

export interface WhyChooseThisCareer {
  whoEnjoysThis: string[];
  personalityFit: string[];
  remoteOpportunities: string;
  industryOutlook: string;
  beginnerFriendliness: string;
  commonMotivations: string[];
}

export interface MentorGuidance {
  startingPoint: string;
  learningOrder: string[];
  beginnerAdvice: string;
  commonMistakes: string[];
  motivationalQuote: string;
}

export interface Career {
  id: string; // e.g., "data-analyst"
  title: string;
  tagline: string;
  overview: string;
  metrics: {
    avgSalary: string;
    jobGrowth: string; 
    difficulty: 'Easy' | 'Medium' | 'Hard';
    duration: string; 
  };
  skills: Skill[];
  roadmap: RoadmapStep[];
  certifications: Certification[];
  projects: CareerProject[];
  portfolioGuidance: PortfolioGuide;
  confidenceMetrics: BeginnerConfidence;
  whyChooseThisCareer: WhyChooseThisCareer;
  guidance: MentorGuidance;
  nextSteps: {
    jobSearchTips: string[];
    networkingTips: string[];
    interviewPrep: string[];
  };
}
