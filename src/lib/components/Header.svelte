<!-- 
  @component Header
  @description The top navigation bar containing breadcrumbs, global search, and user actions.
-->

<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import { headerNav } from '$lib/mockData/navigation';
  import { resolve } from '$app/paths';
  import { user } from '$lib/authStore';
  import UserMenu from '$lib/components/UserMenu.svelte';
</script>

<!-- 
  ==============================================================================
                                  HEADER LAYOUT
  ==============================================================================
-->
<header class="h-16 flex items-center px-6 shrink-0 bg-slate-100 z-10 transition-premium">
  
  <!-- [SECTION] Left: Navigation / Breadcrumbs -->
  <div class="flex-1 flex items-center gap-4">
    <div class="flex items-center gap-3 text-[13px] font-semibold text-slate-500">

      <div class="flex items-center gap-2">
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
  <div class="flex-1 flex items-center justify-end">
    <!-- Decorative Separator 1 -->
    <div class="h-6 w-[1.5px] bg-slate-300/80 mx-8"></div>

    <button class="eng-btn-primary h-9 px-5 shrink-0" aria-label="Create New Project">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      New Project
    </button>

    <!-- Decorative Separator 2 (Symmetric) -->
    <div class="h-6 w-[1.5px] bg-slate-300/80 mx-8"></div>

    <div class="flex items-center gap-6 shrink-0 pr-2">
      {#if $user}
        <UserMenu />
      {:else}
        <a href={resolve('/auth/login')} class="text-[13px] font-bold text-slate-500 hover:text-brand-primary transition-colors whitespace-nowrap no-underline" aria-label="Iniciar sesión">
          Iniciar sesión
        </a>
        <a href={resolve('/auth/register')} class="eng-btn-primary h-9 px-6 whitespace-nowrap no-underline" aria-label="Crear cuenta">
          Crear cuenta
        </a>
      {/if}
    </div>
  </div>
</header>
