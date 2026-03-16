<!-- 
  @component Sidebar
  @description The main navigation sidebar. 
  Uses a "Dumb" presentational pattern, receiving its state and data as props.
-->

<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import { sidebarNav } from '$lib/mockData/navigation';
  
  /* -------------------------------------------------------------------------- */
  /*                                    PROPS                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * controls whether the sidebar is in its compact or expanded state.
   * We use $bindable to allow the parent layout to sync with the sidebar's toggle action.
   */
  let { isCollapsed = $bindable(false) } = $props<{ isCollapsed: boolean }>();

  /* -------------------------------------------------------------------------- */
  /*                                    LOGIC                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * Map icon names from mock data to specific SVG path data.
   * This decoupled approach allows changing the visual representation of an icon 
   * without altering the navigation data structure.
   */
  const icons: Record<string, string> = {
    projects: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    analytics: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    history: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    bookmarks: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
    settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  };
</script>

<!-- 
  ==============================================================================
                                  SIDEBAR LAYOUT
  ==============================================================================
-->
<aside 
  class="shrink-0 hidden lg:flex flex-col bg-slate-100 transition-premium h-full"
  class:w-64={!isCollapsed}
  class:w-20={isCollapsed}
>
  <!-- [SECTION] Logo Area -->
  <div class="h-16 flex items-center px-5 shrink-0 transition-premium">
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

  <!-- [SECTION] Scrollable Navigation -->
  <nav class="flex-1 overflow-y-auto custom-scrollbar py-4">
    <!-- platform: Main application views -->
    <div class="sidebar-group-label" class:hidden={isCollapsed}>Platform</div>
    <div class="space-y-0.5">
      {#each sidebarNav.platform as item (item.label)}
        <button 
          class="eng-sidebar-item group" 
          class:active={item.active} 
          class:collapsed-item={isCollapsed} 
          title={item.title}
          aria-label={item.label}
        >
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[item.icon]} />
            {#if item.icon === 'settings'}<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />{/if}
          </svg>
          {#if !isCollapsed}<span>{item.label}</span>{/if}
        </button>
      {/each}
    </div>

    <!-- activity: Recent user interaction points -->
    <div class="sidebar-group-label" class:hidden={isCollapsed}>Activity</div>
    <div class="space-y-1 mt-1">
      {#each sidebarNav.activity as item (item.label)}
        <button 
          class="eng-sidebar-item group" 
          class:active={item.active} 
          class:collapsed-item={isCollapsed} 
          title={item.title}
          aria-label={item.label}
        >
          <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[item.icon]} />
          </svg>
          {#if !isCollapsed}<span>{item.label}</span>{/if}
        </button>
      {/each}
    </div>

    <!-- recents: Quick access to recently opened documents -->
    {#if !isCollapsed}
      <div class="sidebar-group-label">Recents</div>
      <div class="px-5 space-y-3 mt-1">
        {#each sidebarNav.recents as recent (recent.id)}
          <div class="flex items-center gap-3 cursor-pointer group" role="button" tabindex="0" aria-label="Open {recent.label}">
            <div class="w-6 h-6 rounded {recent.color} border border-slate-300/50 flex items-center justify-center text-[8px] font-bold text-slate-600">{recent.id}</div>
            <span class="text-[12px] text-slate-500 group-hover:text-brand-primary transition-colors truncate">{recent.label}</span>
          </div>
        {/each}
      </div>
    {/if}
  </nav>
  
  <!-- [SECTION] Sidebar Footer -->
  <div class="p-4 border-t border-slate-200/60">
    <div class="flex flex-col gap-1">
      <button class="eng-sidebar-item group" class:collapsed-item={isCollapsed} title="Settings" aria-label="Settings">
        <svg class="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons.settings} />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {#if !isCollapsed}<span>Settings</span>{/if}
      </button>
      
      <!-- Collapse toggle: Affects global layout via $bindable prop -->
      <button 
        onclick={() => isCollapsed = !isCollapsed}
        class="eng-sidebar-item group" 
        class:collapsed-item={isCollapsed}
        title={isCollapsed ? "Expand Sidebar (⌘B)" : "Collapse Sidebar (⌘B)"}
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <svg class="w-4.5 h-4.5 transition-transform duration-500" class:rotate-180={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
        {#if !isCollapsed}<span>Minimize</span>{/if}
      </button>
    </div>
  </div>
</aside>
