<script lang="ts">
  // Mock TOC items for the demo
  const tocItems = [
    { label: 'Introduction', id: 'introduction', level: 0 },
    { label: 'Prerequisites', id: 'prerequisites', level: 1 },
    { label: 'Main Features', id: 'features', level: 0 },
    { label: 'Interactive Examples', id: 'examples', level: 1 },
    { label: 'Community Support', id: 'community', level: 1 },
    { label: 'Conclusion', id: 'conclusion', level: 0 },
  ];
</script>

<aside class="w-64 shrink-0 hidden xl:block h-full bg-slate-50/20 border-l border-slate-100/80 p-8 pt-12 transition-premium">
  <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-8 opacity-70">
    On this page
  </h4>
  <ul class="relative space-y-4">
    <!-- Vertical line for the whole group to anchor indicators -->
    <div class="absolute left-0 top-1 bottom-1 w-px bg-slate-100/80"></div>

    {#each tocItems as item (item.id)}
      <li class="relative">
        <a 
          href="#{item.id}"
          class="text-[13px] font-semibold leading-relaxed transition-all duration-300 block pl-6 group
            {item.id === 'introduction' ? 'text-(--brand-accent-dynamic)' : 'text-slate-500 hover:text-slate-900 group-hover:translate-x-1'}"
        >
          <!-- Active Indicator -->
          {#if item.id === 'introduction'}
            <div class="absolute -left-px top-1.5 bottom-1.5 w-[2px] bg-(--brand-accent-dynamic) shadow-[0_0_8px_var(--brand-accent-dynamic-glow)]"></div>
          {/if}

          <!-- Sub-item dot -->
          {#if item.level > 0}
            <span class="absolute left-[18px] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-200 transition-colors group-hover:bg-slate-400"></span>
          {/if}

          <span class={item.level > 0 ? 'ml-4 opacity-80' : ''}>
            {item.label}
          </span>
        </a>
      </li>
    {/each}
  </ul>

  <div class="mt-16 pt-10 border-t border-slate-100">
    <a 
      href="https://github.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="group flex items-center gap-4 text-[10px] font-bold text-slate-400 hover:text-(--brand-accent-dynamic) transition-all uppercase tracking-widest"
    >
      <div class="w-10 h-10 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-(--brand-accent-dynamic-glow) group-hover:shadow-(--brand-accent-dynamic-glow)">
        <svg class="w-4.5 h-4.5 text-slate-400 transition-colors group-hover:text-(--brand-accent-dynamic)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>
      <span>Edit this page</span>
    </a>
  </div>
</aside>
