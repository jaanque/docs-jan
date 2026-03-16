<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { user } from '$lib/authStore';

  let { children } = $props();
  let isCollapsed = $state(false);

  onMount(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      user.set(session?.user ?? null);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      user.set(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  });
</script>

<svelte:head>
  <title>codocs | Refined Engineering</title>
  <meta name="description" content="Instant engineering documentation browser." />
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen overflow-hidden bg-slate-100">
  <Sidebar bind:isCollapsed />

  <!-- Main Content Area -->
  <main class="flex-1 flex flex-col min-w-0 bg-slate-100">
    <Header />

    <!-- Page Content Area with Margins -->
    <div class="flex-1 pr-5 pb-5 overflow-hidden">
      <div class="eng-content-box">
        <div class="h-full overflow-y-auto">
          {@render children()}
        </div>
      </div>
    </div>
  </main>
</div>
