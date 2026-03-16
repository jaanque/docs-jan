import { mockProjects } from '$lib/mockData/projects';
import type { PageLoad } from './$types';

/**
 * SvelteKit load function.
 * Moves data fetching logic out of the component layer and into the routing layer.
 * This pattern allows for easy swapping of mock data with a real API or database later.
 */
export const load: PageLoad = () => {
  return {
    projects: mockProjects
  };
};
