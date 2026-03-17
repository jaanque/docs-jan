<script lang="ts">
  /* -------------------------------------------------------------------------- */
  /*                                   IMPORTS                                  */
  /* -------------------------------------------------------------------------- */
  import type { Project } from '$lib/types/project';
  import Skeleton from './ui/Skeleton.svelte';
  
  /* -------------------------------------------------------------------------- */
  /*                                    PROPS                                   */
  /* -------------------------------------------------------------------------- */
  let { project, loading = false } = $props<{ project?: Project, loading?: boolean }>();

  /* -------------------------------------------------------------------------- */
  /* STATE                                    */
  /* -------------------------------------------------------------------------- */
  let accentColor = $state<string>('');
  let isHovered = $state(false);
  let imgElement = $state<HTMLImageElement | null>(null);

  /**
   * Extracts the dominant color from the loaded image using a hidden canvas.
   */
  function extractColor() {
    if (!imgElement) return;
    
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Sample a small grid to find the best non-white color
      const size = 10;
      canvas.width = size;
      canvas.height = size;
      
      ctx.drawImage(imgElement, 0, 0, size, size);
      const imageData = ctx.getImageData(0, 0, size, size).data;
      
      const candidates: { r: number, g: number, b: number, score: number }[] = [];

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const a = imageData[i + 3];

        if (a < 128) continue; // Skip transparent

        // Calculate perceived lightness (0-255)
        const lightness = (0.299 * r) + (0.587 * g) + (0.114 * b);
        
        // Skip if too white/light (> 230) or too dark (< 30) for better vibrancy
        if (lightness > 235 || lightness < 20) continue;

        // Simple scoring: favor saturation
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;
        
        candidates.push({ r, g, b, score: saturation });
      }

      if (candidates.length > 0) {
        // Sort by saturation to find the most "vibrant" representative color
        candidates.sort((a, b) => b.score - a.score);
        const winner = candidates[0];
        accentColor = `rgba(${winner.r}, ${winner.g}, ${winner.b}, 0.08)`;
      } else {
        // Fallback if the logo is purely black/white
        accentColor = 'rgba(15, 23, 42, 0.05)';
      }
    } catch {
      accentColor = 'rgba(15, 23, 42, 0.03)';
    }
  }

  /**
   * Formats numbers into a human-readable string (e.g. 1500 -> 1.5k)
   */
  function formatNumber(num: number): string {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
  }
</script>

<!-- 
  ==============================================================================
                                  PROJECT CARD UI
  ==============================================================================
-->
{#if loading || !project}
  <div class="eng-card pointer-events-none opacity-80 backdrop-grayscale-[0.5]">
    <div class="eng-card-inner">
      <!-- Header Skeleton -->
      <div class="flex items-center gap-4 mb-5">
        <Skeleton width="w-14" height="h-14" rounded="rounded-3xl" />
        <Skeleton width="w-32" height="h-4" rounded="rounded-full" />
      </div>

      <!-- Description Skeleton -->
      <div class="mb-4 space-y-2">
        <Skeleton width="w-full" height="h-3.5" rounded="rounded-full" />
        <Skeleton width="w-4/5" height="h-3.5" rounded="rounded-full" />
      </div>

      <!-- Footer Skeleton -->
      <div class="flex items-center gap-4 mt-auto">
        <Skeleton width="w-20" height="h-3" rounded="rounded-full" />
        <Skeleton width="w-16" height="h-3" rounded="rounded-full" />
      </div>
    </div>
  </div>
{:else}
  <div 
    class="eng-card group"
    role="button"
    tabindex="0"
    onmouseenter={() => isHovered = true}
    onmouseleave={() => isHovered = false}
    style:background-color={isHovered ? accentColor : 'white'}
    style:border-color={isHovered ? accentColor.replace('0.08', '0.15') : '#f1f5f9'}
  >
    <div class="eng-card-inner">
      <!-- Header: Logo + Name (Reference Style) -->
      <div class="flex items-center gap-4 mb-5">
        <div class="w-14 h-14 shrink-0 flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105">
          {#if project.logo_url}
            <img 
              bind:this={imgElement}
              src={project.logo_url} 
              alt="{project.name} logo" 
              class="w-full h-full object-cover rounded-xl"
              crossorigin="anonymous"
              onload={extractColor}
              loading="lazy"
              decoding="async"
            />
          {:else}
            <div class="w-full h-full flex items-center justify-center {project.color || 'bg-slate-100'} text-slate-600 font-bold text-sm tracking-tighter rounded-xl">
              {project.short_id}
            </div>
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
          <span class="w-2.5 h-2.5 rounded-full" style="background-color: {project.language_color}" aria-hidden="true"></span>
          <span class="text-[13px] font-medium text-slate-600">{project.language}</span>
        </div>
        
        <!-- Stars -->
        <div class="flex items-center gap-1.5 text-slate-500">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="text-[13px] font-medium text-slate-600">{formatNumber(project.stars)}</span>
        </div>
      </div>
    </div>
  </div>
{/if}
