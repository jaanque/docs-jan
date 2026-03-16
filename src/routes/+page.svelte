<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import Hero from '$lib/components/Hero.svelte';

  /* -------------------------------------------------------------------------- */
  /*                                    PROPS                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * Data provided by the SvelteKit load function in +page.ts.
   */
  let { data } = $props();
</script>

<!-- Render the Hero component with projects from the routing data -->
<Hero projects={data.projects} />
