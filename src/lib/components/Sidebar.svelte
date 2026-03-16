<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /* IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import { sidebarNav } from '$lib/mockData/navigation';
  import { resolve } from '$app/paths';
  
  /* -------------------------------------------------------------------------- */
  /* PROPS                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * controls whether the sidebar is in its compact or expanded state.
   * We use $bindable to allow the parent layout to sync with the sidebar's toggle action.
   */
  let { isCollapsed = $bindable(false) } = $props<{ isCollapsed: boolean }>();

  /* -------------------------------------------------------------------------- */
  /* LOGIC                                   */
  /* -------------------------------------------------------------------------- */
  /**
   * Map icon names from mock data to specific SVG path data.
   * This decoupled approach allows changing the visual representation of an icon 
   * without altering the navigation data structure.
   */
  const icons: Record<string, string> = {
    dashboard: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    projects: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
    shared: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    history: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    bookmarks: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
    settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  };
</script>

<aside 
  class="shrink-0 hidden lg:flex flex-col bg-slate-100 transition-sidebar h-full border-r border-slate-200/50"
  class:w-64={!isCollapsed}
  class:w-20={isCollapsed}
>
  <div class="h-16 flex items-center px-5 shrink-0 overflow-hidden">
    <a href={resolve('/')} class="group flex items-center gap-3 outline-none no-underline">
      <div class="flex items-center justify-center shrink-0">
        <div 
          class="w-10 h-10 eng-logo-mask group-hover:bg-brand-accent group-hover:scale-110" 
          style="mask-image: url('/cocodrilo.svg'); -webkit-mask-image: url('/cocodrilo.svg');"
          aria-label="codocs logo"
        ></div>
      </div>
      <span 
        class="font-black text-[22px] tracking-tighter text-slate-900 leading-none transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] whitespace-nowrap"
        class:opacity-0={isCollapsed} 
        class:translate-x-[-10px]={isCollapsed}
        class:pointer-events-none={isCollapsed}
      >
        codocs
      </span>
    </a>
  </div>

  <nav class="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar py-4" class:px-3={!isCollapsed}>
    <!-- Plataforma -->
    <div class="sidebar-group-label" class:collapsed={isCollapsed}>
      <span>Plataforma</span>
    </div>
    <div class="space-y-0.5">
      {#each sidebarNav.platform as item (item.label)}
        <button 
          class="eng-sidebar-item group transition-sidebar!" 
          class:active={item.active} 
          class:collapsed-item={isCollapsed} 
          title={item.title}
          aria-label={item.label}
        >
          <svg class="w-4.5 h-4.5 shrink-0 transition-transform duration-500" class:scale-110={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[item.icon]} />
          </svg>
          <span class="sidebar-text-container" class:collapsed={isCollapsed}>
            <span class="whitespace-nowrap">{item.label}</span>
          </span>
        </button>
      {/each}
    </div>

    <!-- Actividad -->
    <div class="sidebar-group-label mt-6" class:collapsed={isCollapsed}>
      <span>Actividad</span>
    </div>
    <div class="space-y-0.5">
      {#each sidebarNav.activity as item (item.label)}
        <button 
          class="eng-sidebar-item group transition-sidebar!" 
          class:active={item.active} 
          class:collapsed-item={isCollapsed} 
          title={item.title}
          aria-label={item.label}
        >
          <svg class="w-4.5 h-4.5 shrink-0 transition-transform duration-500" class:scale-110={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[item.icon]} />
          </svg>
          <span class="sidebar-text-container" class:collapsed={isCollapsed}>
            <span class="whitespace-nowrap">{item.label}</span>
          </span>
        </button>
      {/each}
    </div>

    <!-- Recientes -->
    <div class="sidebar-group-label mt-6" class:collapsed={isCollapsed}>
      <span>Recientes</span>
    </div>
    <div class="space-y-1 mt-1" class:px-2={!isCollapsed}>
      {#each sidebarNav.recents as recent (recent.id)}
        <div 
          class="flex items-center gap-3 py-2 cursor-pointer group hover:bg-white hover:shadow-sm rounded-xl transition-all duration-500" 
          class:px-3={!isCollapsed}
          class:justify-center={isCollapsed}
          role="button" 
          tabindex="0" 
          aria-label="Open {recent.label}"
        >
          <div class="w-6 h-6 shrink-0 rounded-lg {recent.color} border border-slate-200 flex items-center justify-center text-[9px] font-black text-slate-600 group-hover:bg-white transition-colors">{recent.id}</div>
          <span class="sidebar-text-container" class:collapsed={isCollapsed}>
            <span class="text-[13px] text-slate-500 group-hover:text-slate-900 font-bold transition-colors truncate">{recent.label}</span>
          </span>
        </div>
      {/each}
    </div>
  </nav>
  
  <div class="p-4 border-t border-slate-200/60 overflow-hidden" class:px-3={isCollapsed}>
    <div class="flex flex-col gap-1">
      <button class="eng-sidebar-item group transition-sidebar!" class:collapsed-item={isCollapsed} title="Configuración" aria-label="Configuración">
        <svg class="w-4.5 h-4.5 shrink-0 transition-transform duration-500" class:scale-110={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons.settings} />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span class="sidebar-text-container" class:collapsed={isCollapsed}>
          <span class="whitespace-nowrap">Configuración</span>
        </span>
      </button>
      
      <button 
        onclick={() => isCollapsed = !isCollapsed}
        class="eng-sidebar-item group transition-sidebar!" 
        class:collapsed-item={isCollapsed}
        title={isCollapsed ? "Expand Sidebar (⌘B)" : "Collapse Sidebar (⌘B)"}
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <svg class="w-4.5 h-4.5 shrink-0 transition-transform duration-500" class:rotate-180={isCollapsed} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
        <span class="sidebar-text-container" class:collapsed={isCollapsed}>
          <span class="whitespace-nowrap">Minimizar</span>
        </span>
      </button>
    </div>
  </div>
</aside>