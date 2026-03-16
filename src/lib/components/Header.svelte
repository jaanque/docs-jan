<!-- 
  @component Header
  @description The top navigation bar containing breadcrumbs, global search, and user actions.
-->

<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import { headerNav } from '$lib/mockData/navigation';
</script>

<!-- 
  ==============================================================================
                                  HEADER LAYOUT
  ==============================================================================
-->
<header class="h-16 flex items-center px-6 shrink-0 bg-slate-100 z-10 transition-premium">
  
  <!-- [SECTION] Left: Navigation / Breadcrumbs -->
  <div class="flex items-center gap-4 w-1/4">
    <div class="flex items-center gap-2 text-[13px] font-semibold text-slate-500">
      {#each headerNav.breadcrumbs as crumb, i (crumb.label)}
        <span class="hover:text-brand-primary cursor-pointer transition-colors" class:text-brand-primary={crumb.active}>{crumb.label}</span>
        {#if i < headerNav.breadcrumbs.length - 1}
          <svg class="w-3 h-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        {/if}
      {/each}
    </div>
  </div>

  <!-- [SECTION] Center: Sophisticated Command Center Search -->
  <div class="flex-1 flex justify-center">
    <div class="eng-search-center-container w-full max-w-2xl group">
      <svg class="w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input 
        type="text" 
        placeholder={headerNav.search.placeholder} 
        class="w-full bg-transparent pl-3 pr-8 text-sm text-slate-900 placeholder-slate-400 font-medium outline-none h-full" 
        aria-label="Search documentation"
      />
      <!-- Shortcut hint: Splitting by character to allow individual styling of keys if needed -->
      <div class="flex items-center gap-1 opacity-20 group-focus-within:opacity-40 transition-opacity" aria-hidden="true">
        {#each headerNav.search.shortcut.split('') as key, i (i)}
          <span class="text-[10px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded shadow-sm">{key}</span>
        {/each}
      </div>
    </div>
  </div>
  
  <!-- [SECTION] Right: Action & Profile Group -->
  <!-- We use w-1/4 to balance the breadcrumbs on the left, centering the search. -->
  <div class="w-1/4 flex items-center justify-end gap-5">
    <button class="eng-btn-primary h-9" aria-label="Create New Project">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      New Project
    </button>

    <div class="flex items-center gap-3 border-l border-slate-200/60 pl-5">
      <button 
        class="relative p-2 text-slate-400 hover:text-brand-primary hover:bg-slate-200/50 rounded-lg transition-premium group" 
        title="Notifications"
        aria-label="View Notifications"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-100"></span>
      </button>
      
      <div 
        class="flex items-center gap-2 cursor-pointer group p-1 pr-3 hover:bg-slate-200/50 rounded-full transition-premium"
        role="button"
        tabindex="0"
        aria-label="User Profile Menu"
      >
        <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-xl shadow-slate-900/10 group-hover:scale-105 transition-transform">JU</div>
        <svg class="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
</header>
