<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import type { Project } from '$lib/types/project';
  import { formatNumber } from '$lib/utils/formatters';
  
  /* -------------------------------------------------------------------------- */
  /*                                    PROPS                                   */
  /* -------------------------------------------------------------------------- */
  let { project } = $props<{ project: Project }>();
</script>

<!-- 
  ==============================================================================
                                  PROJECT CARD UI
  ==============================================================================
-->
<div class="eng-card group p-6! h-full">
  <div class="flex items-start justify-between mb-6">
    <div class="flex items-center gap-6">
      <div class="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-black text-slate-500 shadow-sm transition-premium overflow-hidden shrink-0">
        {#if project.logo}
          <img src={project.logo} alt="{project.name} logo" class="w-full h-full object-contain p-1.5" />
        {:else}
          <span aria-label="Logo for {project.name}">{project.id}</span>
        {/if}
      </div>
      <div class="min-w-0">
        <h3 class="font-black text-slate-900 group-hover:text-brand-accent transition-premium flex items-center gap-2 truncate text-[17px]">
          {project.name.split('/').pop()}
          {#if project.status === 'syncing'}
            <span class="w-2 h-2 rounded-full bg-brand-accent" aria-label="Status: Syncing"></span>
          {/if}
        </h3>
        <p class="text-[12px] text-slate-400 font-bold truncate mt-1 opacity-70">{project.name}</p>
      </div>
    </div>
    <div class="flex items-center gap-2 shrink-0">
       <span class="eng-tag">Public</span>
       <button class="p-1.5 text-slate-300 hover:text-brand-accent transition-colors" title="Pin repository" aria-label="Pin repository {project.name}">
         <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
           <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
         </svg>
       </button>
    </div>
  </div>

  <div class="space-y-4 flex-1">
    {#if project.description}
      <p class="text-[13px] text-slate-500 font-medium leading-relaxed line-clamp-2">
        {project.description}
      </p>
    {:else}
      <div class="h-10 flex items-center">
        <p class="text-[13px] text-slate-400 italic font-medium">Auto-generated manifest for repository documentation.</p>
      </div>
    {/if}

    <div class="flex items-center gap-3">
       <div class="flex items-center gap-1.5">
         <span class="w-2 h-2 rounded-full" style="background-color: {project.langColor}" aria-hidden="true"></span>
         <span class="text-[11px] font-bold text-slate-500">{project.lang}</span>
       </div>
       <div class="w-px h-3 bg-slate-200" aria-hidden="true" role="separator"></div>
       <div class="eng-badge-status" class:synced={project.status === 'synced'} class:syncing={project.status === 'syncing'}>
         <span class="sr-only">Last sync status: {project.time}</span>
         <span class="flex items-center gap-1.5" aria-hidden="true">
           <span class="dot"></span>
           {project.time}
         </span>
       </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-between pt-5 border-t border-slate-100/60 transition-colors">
    <div class="flex items-center gap-5 text-slate-400">
      <div class="flex items-center gap-1.5 hover:text-brand-primary cursor-pointer transition-colors" title="Stars" aria-label="{formatNumber(project.stars)} stars">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span class="text-[12px] font-black" aria-hidden="true">{formatNumber(project.stars)}</span>
      </div>
      <div class="flex items-center gap-1.5 hover:text-brand-primary cursor-pointer transition-colors" title="Forks" aria-label="{formatNumber(project.forks)} forks">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span class="text-[12px] font-black" aria-hidden="true">{formatNumber(project.forks)}</span>
      </div>
    </div>
    
    <button class="text-[11px] font-black text-brand-accent transition-colors flex items-center gap-1 hover:underline" aria-label="Browse Documentation for {project.name}">
      Browse Docs
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>
