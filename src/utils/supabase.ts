import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

/**
 * Lazy-initializes the Supabase client to prevent crashes during compilation
 * or server-side build steps when environment variables are not yet injected.
 */
export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase environment variables are missing. ' +
      'Please verify that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
    );
  }
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
}

/**
 * Submits general or career-specific feedback to feedback_submissions table
 */
export async function submitFeedbackToSupabase(
  rating: number,
  message: string,
  careerId: string | null,
  email: string | null,
  sourcePage: string
) {
  const client = getSupabaseClient();
  const { error } = await (client.from('feedback_submissions') as any)
    .insert({
      rating,
      message,
      career_id: careerId,
      email: email || null,
      source_page: sourcePage,
    });
  if (error) throw error;
}

/**
 * Submits email to waitlist_emails table
 */
export async function submitWaitlistEmailToSupabase(email: string) {
  const client = getSupabaseClient();
  const { error } = await (client.from('waitlist_emails') as any)
    .insert({
      email,
    });
  if (error) throw error;
}

/**
 * Submits new career/topic suggestion to career_requests table
 */
export async function submitCareerRequestToSupabase(
  topic: string,
  email: string | null,
  sourcePage: string
) {
  const client = getSupabaseClient();
  const { error } = await (client.from('career_requests') as any)
    .insert({
      topic,
      email: email || null,
      source_page: sourcePage,
    });
  if (error) throw error;
}
