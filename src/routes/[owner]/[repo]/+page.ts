import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { owner, repo } = params;
  const fullName = `${owner}/${repo}`;

  const { data: project, error: dbError } = await supabase
    .from('projects')
    .select('*')
    .eq('name', fullName)
    .single();

  if (dbError || !project) {
    throw error(404, {
      message: 'Proyecto no encontrado'
    });
  }

  return {
    project
  };
};
