import type { SidebarNav, HeaderNav } from '$lib/types/navigation';

/**
 * Centralized configuration for the Sidebar navigation.
 * All labels, icons, and logical groupings are defined here to ensure
 * the UI remains "dumb" and purely presentational.
 */
export const sidebarNav: SidebarNav = {
  platform: [
    { label: 'Dashboard', icon: 'dashboard', active: true, title: 'Resumen general' },
    { label: 'Mis Proyectos', icon: 'projects', active: false, title: 'Documentaciones importadas o creadas' },
    { label: 'Compartido con migo', icon: 'shared', active: false, title: 'Colaboraciones' }
  ],
  activity: [
    { label: 'Historial', icon: 'history', active: false, title: 'Últimos documentos' },
    { label: 'Marcadores', icon: 'bookmarks', active: false, title: 'Páginas favoritas' }
  ],
  recents: [
    { id: 'COD', label: 'codocs-core', color: 'bg-brand-accent/10' },
    { id: 'API', label: 'v2-api-spec', color: 'bg-slate-200' },
    { id: 'DS', label: 'design-system', color: 'bg-blue-50' }
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
