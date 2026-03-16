import type { Project } from '$lib/types/project';
import microsoftLogo from '$lib/assets/logos/microsoft.png';
import googleLogo from '$lib/assets/logos/google.png';
import vercelLogo from '$lib/assets/logos/vercel.png';
import metaLogo from '$lib/assets/logos/meta.png';
import appleLogo from '$lib/assets/logos/apple.png';
import goLogo from '$lib/assets/logos/go.png';

/**
 * Mock data representing a collection of documentation projects.
 * This data is used to populate the main project grid in the Hero component.
 */
export const mockProjects: Project[] = [
  { id: 'MS', name: 'Microsoft / TypeScript-Docs', logo: microsoftLogo, time: 'Syncing...', stars: 124, forks: 42, issues: 0, status: 'syncing', lang: 'TypeScript', langColor: '#3178c6' },
  { id: 'GO', name: 'Google / V8-Engine-Reference', logo: googleLogo, time: 'Synced 2m ago', stars: 856, forks: 128, issues: 5, status: 'synced', lang: 'C++', langColor: '#f34b7d', description: 'Comprehensive documentation for the V8 JavaScript engine architecture and implementation details.' },
  { id: 'VC', name: 'Vercel / Next.js-Global-Edge', logo: vercelLogo, time: 'Synced 1h ago', stars: 45, forks: 12, issues: 0, status: 'synced', lang: 'TypeScript', langColor: '#3178c6' },
  { id: 'MT', name: 'Meta / React-Internal-Manifest', logo: metaLogo, time: 'Needs sync', stars: 2, forks: 0, issues: 0, status: 'error', lang: 'JavaScript', langColor: '#f1e05a' },
  { id: 'AP', name: 'Apple / Swift-UI-Guidelines', logo: appleLogo, time: 'Synced 10s ago', stars: 12, forks: 3, issues: 0, status: 'synced', lang: 'Swift', langColor: '#F05138' },
  { id: 'GO', name: 'Go / Core-API-Reference', logo: goLogo, time: 'Synced 5m ago', stars: 2.3, forks: 512, issues: 12, status: 'synced', lang: 'Go', langColor: '#00ADD8' },
];
