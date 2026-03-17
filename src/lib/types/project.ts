/**
 * Represents the various states a project can be in regarding its 
 * documentation synchronization with the repository.
 */
export type ProjectStatus = 'syncing' | 'synced' | 'error';

/**
 * Core model representing a repository or documentation project.
 */
export interface Project {
  /** Unique identifier for the project (UUID) */
  id: string;
  /** Full name (typically owner/repo format) */
  name: string;
  /** Background color class for badges/UI */
  color: string;
  /** Short identifier (e.g., 'COD', 'API') */
  short_id: string;
  /** URL or path to the project's brand logo */
  logo_url?: string;
  /** Number of stars on the source repository */
  stars: number;
  /** Number of forks of the source repository */
  forks: number;
  /** Number of open issues */
  issues: number;
  /** Current synchronization status */
  status: ProjectStatus;
  /** Primary programming language used in the project */
  language: string;
  /** Hex or Tailwind class for the language's representative color */
  language_color: string;
  /** Brief summary of the project's purpose */
  description?: string;
}
