<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Project } from '$lib/types/project';

  let { project } = $props<{ project: Project }>();

  // Mock documentation structure
  const docSections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Introduction', href: '#' },
        { label: 'Installation', href: '#' },
        { label: 'Quick Start', href: '#' },
      ]
    },
    {
      title: 'Core Concepts',
      items: [
        { label: 'Architecture', href: '#' },
        { label: 'Data Flow', href: '#' },
        { label: 'Security', href: '#' },
      ]
    },
    {
      title: 'Advanced',
      items: [
        { label: 'Customization', href: '#' },
        { label: 'Plugins', href: '#' },
        { label: 'Deployment', href: '#' },
      ]
    }
  ];
</script>

<nav class="w-64 shrink-0 h-full border-r border-slate-100 bg-slate-50/50 flex flex-col">
  <!-- Sidebar Header: Project Brand -->
  <div class="p-6 pb-2">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-11 h-11 shrink-0 flex items-center justify-center transition-premium hover:scale-105 group relative">
        {#if project.logo_url}
          <img src={project.logo_url} alt={project.name} class="w-full h-full object-contain filter drop-shadow-sm rounded-xl" />
        {:else}
          <div class="w-full h-full flex items-center justify-center {project.color || 'bg-slate-100'} text-slate-600 font-black text-[10px] rounded-lg uppercase tracking-tighter shadow-sm">
            {project.short_id}
          </div>
        {/if}
      </div>
      <div class="flex flex-col min-w-0">
        <span class="font-black text-slate-900 truncate leading-none tracking-tightest text-base">{project.name.split('/')[1]}</span>
      </div>
    </div>
  </div>

  <!-- Navigation Links -->
  <div class="flex-1 overflow-y-auto custom-scrollbar px-3 pb-10 space-y-8">
    {#each docSections as section (section.title)}
      <div class="space-y-1.5">
        <h4 class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3">
          {section.title}
        </h4>
        <ul class="space-y-0.5">
          {#each section.items as item (item.label)}
            <li>
              <a 
                href={resolve('/')}
                class="group flex items-center px-3 py-2 text-[13px] font-semibold rounded-xl transition-all duration-300 {item.label === 'Introduction' ? 'text-(--brand-accent-dynamic) bg-(--brand-accent-dynamic-light)' : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-900'}"
              >
                {#if item.label === 'Introduction'}
                  <div class="w-1.5 h-1.5 rounded-full bg-(--brand-accent-dynamic) mr-3 shadow-[0_0_8px_var(--brand-accent-dynamic-glow)]"></div>
                {/if}
                <span class="transition-transform duration-300 group-hover:translate-x-0.5">{item.label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</nav>

<style>
  /* Local scrollbar style matching global */
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: #e2e8f0;
  }
</style>
