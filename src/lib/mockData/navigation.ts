import type { SidebarNav, HeaderNav } from '$lib/types/navigation';

/**
 * Centralized configuration for the Sidebar navigation.
 * All labels, icons, and logical groupings are defined here to ensure
 * the UI remains "dumb" and purely presentational.
 */
export const sidebarNav: SidebarNav = {
  platform: [
    { label: 'Dashboard', icon: 'dashboard', active: true, title: 'Resumen general' },
    { label: 'Mis Proyectos', icon: 'projects', active: false, title: 'Proyectos importados o creados' },
    { label: 'Compartido con migo', icon: 'shared', active: false, title: 'Colaboraciones' }
  ],
  activity: [
    { label: 'Historial', icon: 'history', active: false, title: 'Últimos archivos' },
    { label: 'Marcadores', icon: 'bookmarks', active: false, title: 'Páginas favoritas' }
  ],
  recents: []
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
