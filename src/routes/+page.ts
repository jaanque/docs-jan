import { mockProjects } from '$lib/mockData/projects';

/**
 * SvelteKit load function.
 * Moves data fetching logic out of the component layer and into the routing layer.
 * Using automatic type inference instead of manual 'PageLoad' for better precision.
 */
export const load = () => {
  return {
    projects: mockProjects
  };
};
