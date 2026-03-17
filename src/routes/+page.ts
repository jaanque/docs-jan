import { supabase } from '$lib/supabaseClient';

/**
 * SvelteKit load function.
 * Fetches real projects from Supabase regardless of authentication.
 */
export const load = async () => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('last_accessed_at', { ascending: false });

  if (error) {
    return { projects: [] };
  }

  return {
    projects: projects || []
  };
};
