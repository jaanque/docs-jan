/**
 * Represents the various states a project can be in regarding its 
 * documentation synchronization with the repository.
 */
export type ProjectStatus = 'syncing' | 'synced' | 'error';

/**
 * Core model representing a repository or documentation project.
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Full name (typically owner/repo format) */
  name: string;
  /** URL or path to the project's brand logo */
  logo: string;
  /** Human-readable string representing the last sync time */
  time: string;
  /** Number of stars on the source repository */
  stars: number;
  /** Number of forks of the source repository */
  forks: number;
  /** Number of open issues */
  issues: number;
  /** Current synchronization status */
  status: ProjectStatus;
  /** Primary programming language used in the project */
  lang: string;
  /** Hex or Tailwind class for the language's representative color */
  langColor: string;
  /** Brief summary of the project's purpose */
  description?: string;
}
