import type { SidebarNav, HeaderNav } from '$lib/types/navigation';

/**
 * Centralized configuration for the Sidebar navigation.
 * All labels, icons, and logical groupings are defined here to ensure
 * the UI remains "dumb" and purely presentational.
 */
export const sidebarNav: SidebarNav = {
  platform: [
    { label: 'Projects', icon: 'projects', active: true, title: 'Projects View' },
    { label: 'Analytics', icon: 'analytics', active: false, title: 'Analytics & Reports' }
  ],
  activity: [
    { label: 'History', icon: 'history', active: false, title: 'Recent Documents' },
    { label: 'Saved', icon: 'bookmarks', active: false, title: 'Bookmarks' }
  ],
  recents: [
    { id: 'API', label: 'v2-api-spec', color: 'bg-slate-200' },
    { id: 'UX', label: 'design-system-core', color: 'bg-slate-200' }
  ]
};

/**
 * Configuration for the Header navigation, breadcrumbs, and search defaults.
 */
export const headerNav: HeaderNav = {
  breadcrumbs: [
    { label: 'Workspace', active: false },
    { label: 'Projects', active: true }
  ],
  search: {
    placeholder: 'Search projects, files, and resources... (⌘J)',
    shortcut: '⌘J'
  }
};
