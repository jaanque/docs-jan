<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
  let isCollapsed = $state(false);
</script>

<svelte:head>
  <title>CoDoc | Refined Engineering</title>
  <meta name="description" content="Instant engineering documentation browser." />
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen overflow-hidden bg-slate-100">
  <!-- Seamless Engineering Shell Sidebar -->
  <aside 
    class="shrink-0 hidden lg:flex flex-col bg-slate-100 transition-premium h-full"
    class:w-64={!isCollapsed}
    class:w-20={isCollapsed}
  >
    <!-- Logo Area -->
    <div class="h-16 flex items-center px-6 shrink-0 transition-premium">
      <div class="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-slate-900/10">CD</div>
      <div 
        class="ml-3 flex flex-col transition-opacity duration-300"
        class:opacity-0={isCollapsed} 
        class:hidden={isCollapsed}
      >
        <span class="font-bold text-sm tracking-tight text-slate-900">CoDoc</span>
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engineering</span>
      </div>
    </div>

    <!-- Scrollable Navigation -->
    <nav class="flex-1 overflow-y-auto custom-scrollbar py-2">
      <!-- Platform Group -->
      <div class="sidebar-group-label" class:hidden={isCollapsed}>Platform</div>
      <div class="space-y-0.5">
        <button class="eng-sidebar-item active group" class:collapsed-item={isCollapsed} title="Projects View">
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          {#if !isCollapsed}<span>Projects</span>{/if}
        </button>
        <button class="eng-sidebar-item group" class:collapsed-item={isCollapsed} title="Analytics & Reports">
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          {#if !isCollapsed}<span>Analytics</span>{/if}
        </button>
      </div>

      <!-- Activity Group -->
      <div class="sidebar-group-label" class:hidden={isCollapsed}>Activity</div>
      <div class="space-y-1 mt-1">
        <button class="eng-sidebar-item group" class:collapsed-item={isCollapsed} title="Recent Documents">
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {#if !isCollapsed}<span>History</span>{/if}
        </button>
        <button class="eng-sidebar-item group" class:collapsed-item={isCollapsed} title="Bookmarks">
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          {#if !isCollapsed}<span>Saved</span>{/if}
        </button>
      </div>

      <!-- Recents Section -->
      {#if !isCollapsed}
        <div class="sidebar-group-label">Recents</div>
        <div class="px-5 space-y-3 mt-1">
          <div class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 rounded bg-slate-200 border border-slate-300/50 flex items-center justify-center text-[8px] font-bold text-slate-600">API</div>
            <span class="text-[12px] text-slate-500 group-hover:text-brand-primary transition-colors truncate">v2-api-spec</span>
          </div>
          <div class="flex items-center gap-3 cursor-pointer group">
            <div class="w-6 h-6 rounded bg-slate-200 border border-slate-300/50 flex items-center justify-center text-[8px] font-bold text-slate-600">UX</div>
            <span class="text-[12px] text-slate-500 group-hover:text-brand-primary transition-colors truncate">design-system-core</span>
          </div>
        </div>
      {/if}
    </nav>
    
    <!-- Sidebar Footer -->
    <div class="p-4 bg-slate-200/20">
      <div class="flex flex-col gap-1">
        <button class="eng-sidebar-item group" class:collapsed-item={isCollapsed} title="Settings">
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {#if !isCollapsed}<span>Settings</span>{/if}
        </button>
        <button 
          onclick={() => isCollapsed = !isCollapsed}
          class="eng-sidebar-item group" 
          class:collapsed-item={isCollapsed}
          title={isCollapsed ? "Expand Sidebar (⌘B)" : "Collapse Sidebar (⌘B)"}
        >
          <svg class="w-4.5 h-4.5 transition-transform duration-500" class:rotate-180={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          {#if !isCollapsed}<span>Minimize</span>{/if}
        </button>
      </div>
    </div>
  </aside>

  <!-- Main Content Area -->
  <main class="flex-1 flex flex-col min-w-0 bg-slate-100">
    <!-- Premium Refined Header -->
    <header class="h-16 flex items-center px-6 shrink-0 bg-slate-100 z-10 transition-premium">
      <!-- Left: Navigation / Breadcrumbs -->
      <div class="flex items-center gap-4 w-1/4">
        <div class="flex items-center gap-2 text-[13px] font-semibold text-slate-500">
          <span class="hover:text-brand-primary cursor-pointer transition-colors">Workspace</span>
          <svg class="w-3 h-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          <span class="text-brand-primary">Projects</span>
        </div>
      </div>

      <!-- Center: Sophisticated Command Center Search -->
      <div class="flex-1 flex justify-center">
        <div class="eng-search-container w-full max-w-lg group">
          <svg class="w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input 
            type="text" 
            placeholder="Search projects, files, and resources... (⌘J)" 
            class="w-full bg-transparent pl-3 pr-8 text-sm text-slate-900 placeholder-slate-400 font-medium outline-none h-full" 
          />
          <div class="flex items-center gap-1 opacity-20 group-focus-within:opacity-40 transition-opacity">
            <span class="text-[10px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded shadow-sm">⌘</span>
            <span class="text-[10px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded shadow-sm">J</span>
          </div>
        </div>
      </div>
      
      <!-- Right: Action & Profile Group -->
      <div class="w-1/4 flex items-center justify-end gap-5">
        <button class="eng-btn-primary h-9">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          New Project
        </button>

        <div class="flex items-center gap-3 border-l border-slate-200/60 pl-5">
          <button class="relative p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-200/50 rounded-lg transition-premium group" title="Notifications">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-100"></span>
          </button>
          
          <div class="flex items-center gap-2 cursor-pointer group p-1 pr-3 hover:bg-slate-200/50 rounded-full transition-premium">
            <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-xl shadow-slate-900/10 group-hover:scale-105 transition-transform">JU</div>
            <svg class="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>
    </header>

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
