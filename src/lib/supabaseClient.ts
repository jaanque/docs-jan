import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

// Initialize the Supabase client using environment variables.
// These are loaded from the .env file.
const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Supabase credentials are missing. Check your .env file.
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
