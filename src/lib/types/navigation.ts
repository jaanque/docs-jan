/**
 * Represents an individual item in the sidebar navigation.
 */
export interface NavItem {
  /** The text displayed to the user */
  label: string;
  /** Logical name mapping to a specific SVG icon */
  icon: string;
  /** Whether this item is currently selected */
  active?: boolean;
  /** Tooltip or accessible title */
  title: string;
}

/**
 * Represents a recently accessed item, typically displayed 
 * with a small badge or color code in the sidebar.
 */
export interface RecentItem {
  /** Short identifier (e.g., 'API', 'UX') */
  id: string;
  /** Full name of the recent item */
  label: string;
  /** Badge background color class */
  color: string;
}

/**
 * A segment of the breadcrumb trail in the header.
 */
export interface Breadcrumb {
  /** Display label */
  label: string;
  /** Whether this is the current active segment */
  active: boolean;
}

/**
 * Structure for the header's navigation and search data.
 */
export interface HeaderNav {
  /** Breadcrumb segments */
  breadcrumbs: Breadcrumb[];
  /** Configuration for the global search bar */
  search: {
    /** Display placeholder text */
    placeholder: string;
    /** Keyboard shortcut hint string */
    shortcut: string;
  };
}

/**
 * Complete structure for the sidebar's navigation data.
 */
export interface SidebarNav {
  /** Main application platform links */
  platform: NavItem[];
  /** User-specific activity links */
  activity: NavItem[];
  /** List of recent interaction points */
  recents: RecentItem[];
}
