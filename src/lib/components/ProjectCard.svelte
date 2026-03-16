<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import type { Project } from '$lib/types/project';
  
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
<div class="eng-card group">
  <div class="eng-card-inner">
    <!-- Header: Logo + Name (Reference Style) -->
    <div class="flex items-center gap-4 mb-4">
      <div class="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
        {#if project.logo}
          <img 
            src={project.logo} 
            alt="{project.name} logo" 
            class="w-full h-full object-contain p-2"
            loading="lazy"
            decoding="async"
          />
        {:else}
          <span aria-label="Logo for {project.name}" class="text-xs font-bold text-slate-300 uppercase">{project.id.slice(0,2)}</span>
        {/if}
      </div>
      
      <h3 class="font-bold text-slate-900 truncate text-[16px] tracking-tight">
        {project.name}
      </h3>
    </div>

    <!-- Description: Brief & Essential -->
    <div class="mb-4">
      {#if project.description}
        <p class="text-[14px] text-slate-500 font-normal leading-normal line-clamp-2">
          {project.description}
        </p>
      {:else}
        <p class="text-[13px] text-slate-400 italic font-normal opacity-60">
          No description provided for this repository.
        </p>
      {/if}
    </div>

    <!-- Footer: Language & Stars Only (Reference Style) -->
    <div class="flex items-center gap-4 mt-auto">
      <!-- Language -->
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: {project.langColor}" aria-hidden="true"></span>
        <span class="text-[13px] font-medium text-slate-600">{project.lang}</span>
      </div>
      
      <!-- Stars -->
      <div class="flex items-center gap-1.5 text-slate-500">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span class="text-[13px] font-medium text-slate-600">{project.id === 'supabase' ? '70k' : '15k'}</span>
      </div>
    </div>
  </div>
</div>
