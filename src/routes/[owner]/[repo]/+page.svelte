<script lang="ts">
  import type { PageData } from './$types';
  import DocsSidebar from '$lib/components/DocsSidebar.svelte';
  import TableOfContents from '$lib/components/TableOfContents.svelte';
  import { extractDominantColor } from '$lib/utils/colors';

  let { data } = $props<{ data: PageData }>();
  let dynamicRgb = $state('13, 148, 136'); // Default Teal RGB
  let logoImg = $state<HTMLImageElement | null>(null);

  function handleLogoLoad() {
    if (logoImg) {
      const rgb = extractDominantColor(logoImg);
      if (rgb) dynamicRgb = rgb;
    }
  }
</script>

<svelte:head>
  <title>{data.project.name.split('/')[1]} | Docs Jan</title>
</svelte:head>

<div 
  class="flex h-full max-w-full mx-auto"
  style="--brand-accent-dynamic: rgb({dynamicRgb}); --brand-accent-dynamic-light: rgba({dynamicRgb}, 0.05); --brand-accent-dynamic-glow: rgba({dynamicRgb}, 0.2);"
>
  <!-- Hidden Image for Color Extraction -->
  {#if data.project.logo_url}
    <img 
      bind:this={logoImg}
      src={data.project.logo_url} 
      alt="" 
      class="hidden" 
      crossorigin="anonymous"
      onload={handleLogoLoad}
    />
  {/if}

  <!-- Left Sidebar: Doc Navigation -->
  <DocsSidebar project={data.project} />

  <!-- Main Content Area -->
  <main class="flex-1 min-w-0 bg-white">
    <!-- Inner Scrollable Content -->
    <div class="h-full overflow-y-auto px-12 py-12 lg:px-20 lg:py-16">
      <article class="prose prose-slate prose-lg max-w-4xl mx-auto">
        <header class="mb-24 relative">
          <!-- Atmospheric Glow: centered behind the brand block -->
          <div class="absolute -top-32 -left-32 w-lg h-lg bg-(--brand-accent-dynamic) opacity-[0.04] blur-[120px] pointer-events-none rounded-full"></div>
          <div class="flex items-center gap-10 relative">
            <!-- Premium Logo Display (Frameless) -->
            <div class="w-28 h-28 shrink-0 flex items-center justify-center transition-all duration-700 hover:scale-105 relative group">
              {#if data.project.logo_url}
                <img src={data.project.logo_url} alt="" class="w-full h-full object-contain filter drop-shadow-xl rounded-4xl" />
              {:else}
                <div class="w-full h-full flex items-center justify-center {data.project.color || 'bg-slate-100'} text-slate-600 font-black text-4xl uppercase rounded-4xl tracking-tighter shadow-sm">
                  {data.project.short_id}
                </div>
              {/if}
            </div>

            <div class="flex-1 min-w-0">
              <!-- Meta Badges (Floating above the title) -->
              <div class="flex items-center gap-4 mb-4 translate-y-[-4px]">
                 <span class="bg-(--brand-accent-dynamic-light) text-(--brand-accent-dynamic) px-2.5 py-1 text-[10px] font-black rounded-lg border border-(--brand-accent-dynamic-glow) uppercase tracking-widest leading-none shadow-sm">v1.2.4</span>
                 <div class="flex items-center gap-2 px-2">
                   <div class="relative flex h-1.5 w-1.5">
                     <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
                     <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-success shadow-[0_0_8px_rgba(16,185,129,0.3)]"></span>
                   </div>
                   <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Active Core</span>
                 </div>
              </div>

              <!-- Main Branding Block -->
              <div class="flex flex-col gap-5">
                <h1 class="text-7xl font-black text-slate-900 tracking-tightest leading-[0.85] lowercase">
                  {data.project.name.split('/')[1]}
                </h1>
                <p class="text-[19px] text-slate-500/70 leading-relaxed font-semibold max-w-2xl">
                  {data.project.description || 'Modern infrastructure for engineering teams.'}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div class="space-y-24">
          <section id="introduction" class="scroll-mt-32">
            <h2 class="text-3xl font-black text-slate-900 mb-8 border-b border-slate-100/80 pb-4 tracking-tight">Introduction</h2>
            <div class="text-slate-600 leading-8 space-y-6">
              <p>
                Welcome to <strong>{data.project.name.split('/')[1]}</strong>. 
                This project provides a robust foundation for building scalable applications using {data.project.language}.
              </p>
              <p>
                It was designed with performance and developer experience in mind, ensuring that your team can move fast without breaking things.
              </p>
            </div>
            
            <div class="mt-10 p-8 bg-(--brand-accent-dynamic-light) rounded-3xl border border-(--brand-accent-dynamic-glow) relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-1 h-full bg-(--brand-accent-dynamic) opacity-20"></div>
              <h4 class="flex items-center gap-2.5 text-(--brand-accent-dynamic) font-black text-xs mb-4 uppercase tracking-[0.2em]">
                <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Insight
              </h4>
              <p class="text-[15px] text-slate-600 leading-relaxed font-medium">
                This repository currently holds <strong class="text-slate-900">{data.project.stars.toLocaleString()} stars</strong> and <strong class="text-slate-900">{data.project.forks.toLocaleString()} forks</strong>, reflecting its growing adoption in the {data.project.language} community.
              </p>
            </div>
          </section>

          <section id="prerequisites" class="scroll-mt-32">
            <h3 class="text-2xl font-black text-slate-900 mb-6 tracking-tight">Prerequisites</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">Before you start, make sure you have the following installed:</p>
            <ul class="space-y-4 text-slate-600">
              <li class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                <span>Node.js <code class="bg-slate-100 px-1.5 py-0.5 rounded text-slate-900 font-bold">v18.0.0</code> or higher</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                <span>npm, yarn, or pnpm</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                <span>Git</span>
              </li>
            </ul>
          </section>

          <section id="features" class="scroll-mt-32">
            <h2 class="text-3xl font-black text-slate-900 mb-8 border-b border-slate-100/80 pb-4 tracking-tight">Main Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 transition-premium hover:shadow-xl hover:shadow-slate-200/20 hover:bg-white">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <svg class="w-6 h-6 text-(--brand-accent-dynamic)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 class="font-black text-slate-900 mb-2 tracking-tight">Blazing Fast</h4>
                <p class="text-sm text-slate-500 leading-relaxed font-medium">Optimized for speed and minimal bundle size by default.</p>
              </div>
              <div class="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 transition-premium hover:shadow-xl hover:shadow-slate-200/20 hover:bg-white">
                <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <svg class="w-6 h-6 text-(--brand-accent-dynamic)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 class="font-black text-slate-900 mb-2 tracking-tight">Type Safe</h4>
                <p class="text-sm text-slate-500 leading-relaxed font-medium">Full {data.project.language} support with autogenerated types.</p>
              </div>
            </div>
          </section>

          <section id="examples" class="scroll-mt-32">
             <h3 class="text-2xl font-black text-slate-900 mb-8 tracking-tight">Quick Example</h3>
             <div class="bg-slate-900 rounded-4xl p-8 font-mono text-sm text-slate-300 shadow-2xl border border-slate-800 relative group overflow-hidden">
               <div class="flex items-center gap-2.5 mb-6 border-b border-white/5 pb-4">
                 <div class="flex gap-1.5">
                   <div class="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
                   <div class="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30"></div>
                   <div class="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30"></div>
                 </div>
                 <span class="ml-3 text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">usage.ts</span>
               </div>
               <pre class="leading-relaxed"><code><span class="text-(--brand-accent-dynamic) opacity-80">import</span> &#123; core &#125; <span class="text-(--brand-accent-dynamic) opacity-80">from</span> <span class="text-green-400/90">'@{data.project.name.split('/')[1]}'</span>;

<span class="text-slate-500/60">// 1. Initialize modern engine</span>
<span class="text-(--brand-accent-dynamic) opacity-80">const</span> engine = <span class="text-(--brand-accent-dynamic) opacity-80">new</span> core.Engine(&#123;
  mode: <span class="text-green-400/90">'production'</span>,
  verbose: <span class="text-(--brand-accent-dynamic) opacity-80">false</span>
&#125;);

<span class="text-(--brand-accent-dynamic) opacity-80">await</span> engine.start();</code></pre>
             </div>
          </section>
        </div>

        <!-- Pagination Next/Prev -->
        <div class="mt-32 pt-12 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-6 pb-20">
          <button class="flex-1 group p-8 rounded-4xl border border-slate-100 hover:border-(--brand-accent-dynamic-glow) hover:bg-slate-50 transition-all text-left">
             <span class="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Previous Page</span>
             <span class="text-xl text-slate-900 font-black group-hover:text-(--brand-accent-dynamic) transition-colors tracking-tight">Architecture Overview</span>
          </button>
          <button class="flex-1 group p-8 rounded-4xl border border-slate-100 hover:border-(--brand-accent-dynamic-glow) hover:bg-slate-50 transition-all text-right">
             <span class="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Next Step</span>
             <span class="text-xl text-slate-900 font-black group-hover:text-(--brand-accent-dynamic) transition-colors tracking-tight">Installation Guide</span>
          </button>
        </div>
      </article>
    </div>
  </main>

  <!-- Right: Table of Contents -->
  <TableOfContents />
</div>

<style>
  /* Local overrides for prose or layout if needed */
  :global(.prose h2) {
    scroll-margin-top: 100px;
  }
</style>
