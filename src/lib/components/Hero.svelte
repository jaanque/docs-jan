<!-- 
  @component Hero
  @description The main view for the projects list.
  Acts as a "Dumb" container that renders search filters and the project grid.
-->

<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import type { Project } from '$lib/types/project';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  /* -------------------------------------------------------------------------- */
  /*                                    PROPS                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * List of projects to display.
   * Provided by the parent "Smart" route (+page.svelte).
   */
  let { projects = [] } = $props<{ projects?: Project[] }>();
</script>

<!-- 
  ==============================================================================
                                  PROJECTS GRID VIEW
  ==============================================================================
-->
<div class="py-10 px-10 flex flex-col w-full">

  <!-- [SECTION] Premium Project Grid -->
  <!-- We use a responsive grid that adjusts columns based on viewport width (1, 2, or 3 cols) -->
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
    {#each projects as project (project.name)}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
