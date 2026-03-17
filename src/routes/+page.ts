import { supabase } from '$lib/supabaseClient';

/**
 * SvelteKit load function.
 * Fetches real projects from Supabase for the authenticated user.
 */
export const load = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    return {
      projects: []
    };
  }

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
