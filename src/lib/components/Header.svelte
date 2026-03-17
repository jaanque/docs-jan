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
  import { page } from '$app/state';
  import UserMenu from '$lib/components/UserMenu.svelte';
  import NewProjectModal from '$lib/components/NewProjectModal.svelte';

  let isModalOpen = $state(false);

  // Dynamic breadcrumb logic
  const isProjectPage = $derived(page.route.id === '/[owner]/[repo]');
  const project = $derived(page.data.project);
  const projectName = $derived(project?.name?.split('/')[1] || '');
</script>

<!-- 
  ==============================================================================
                                  HEADER LAYOUT
  ==============================================================================
-->
<header class="h-16 flex items-center px-8 shrink-0 bg-slate-100 z-50 transition-premium border-b border-slate-200/50">
  
  <!-- [SECTION] Left: Navigation / Breadcrumbs -->
  <div class="flex-1 flex items-center gap-6">
    <div class="flex items-center gap-4 text-[13px] font-semibold">
      <div class="flex items-center gap-3">
        <a 
          href={resolve('/')} 
          class="flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-all no-underline uppercase tracking-[0.2em] text-[10px] font-black" 
          class:text-brand-primary={!isProjectPage}
        >
          PROJECTS
        </a>
        
        {#if isProjectPage && project}
          <div class="flex items-center gap-5">
            <div class="h-4 w-px bg-slate-200 ml-1"></div>
            
            <div class="flex items-center gap-3 transition-premium group cursor-default">
              <!-- Frameless Mini Logo -->
              <div class="w-7 h-7 flex items-center justify-center shrink-0 relative group">
                {#if project.logo_url}
                  <img src={project.logo_url} alt="" class="w-full h-full object-contain filter drop-shadow-xs rounded-md" />
                {:else}
                  <div class="w-full h-full flex items-center justify-center {project.color || 'bg-slate-100'} text-slate-600 font-black text-[9px] uppercase rounded-md tracking-tighter">
                    {project.short_id}
                  </div>
                {/if}
              </div>
              
              <span class="text-slate-900 font-black tracking-tightest text-[13px]">{projectName}</span>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- [SECTION] Center: Sophisticated Command Center Search -->
  <div class="flex-[1.5] flex justify-center">
    <div class="eng-search-center-container w-full max-w-2xl group">
      <svg class="w-4 h-4 text-slate-400 group-focus-within:text-brand-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input 
        type="text" 
        placeholder={headerNav.search.placeholder} 
        class="w-full bg-transparent pl-3 pr-8 text-sm text-slate-900 placeholder-slate-400 font-medium outline-none h-full" 
        aria-label="Search"
      />
      <!-- Shortcut hint -->
      <div class="flex items-center gap-1 opacity-20 group-focus-within:opacity-40 transition-opacity" aria-hidden="true">
        {#each headerNav.search.shortcut.split('') as key, i (i)}
          <span class="text-[10px] bg-slate-900 text-white font-mono px-1.5 py-0.5 rounded shadow-sm">{key}</span>
        {/each}
      </div>
    </div>
  </div>
  
  <!-- [SECTION] Right: Action & Profile Group -->
  <div class="flex-1 flex items-center justify-end gap-3">
    
    <!-- Notification Bell -->
    <div class="relative group">
      <button 
        class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-xl transition-premium relative"
        aria-label="Notifications"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="absolute top-2 right-2 w-2 h-2 bg-brand-accent rounded-full border-2 border-slate-100"></span>
      </button>
    </div>

    <!-- New Project Trigger -->
    <button 
      onclick={() => (isModalOpen = true)}
      class="eng-btn-primary h-9 px-4 shrink-0 shadow-sm"
      aria-label="Create New Project"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      <span class="font-bold">New Project</span>
    </button>

    <div class="h-6 w-px bg-slate-200 mx-2"></div>

    <div class="flex items-center shrink-0">
      {#if $user}
        <UserMenu />
      {:else}
        <div class="flex items-center gap-4">
          <a href={resolve('/auth/login')} class="text-[13px] font-bold text-slate-500 hover:text-brand-primary transition-colors whitespace-nowrap no-underline" aria-label="Iniciar sesión">
            Iniciar sesión
          </a>
          <a href={resolve('/auth/register')} class="eng-btn-primary h-9 px-5 whitespace-nowrap no-underline shadow-sm" aria-label="Crear cuenta">
            Crear cuenta
          </a>
        </div>
      {/if}
    </div>
  </div>
</header>

<NewProjectModal isOpen={isModalOpen} onClose={() => (isModalOpen = false)} />
