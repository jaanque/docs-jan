<script lang="ts">
  const features = [
    {
      title: 'Deep Analysis',
      desc: 'Our intelligent system parses your entire codebase to understand context and relationships accurately.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Clean Export',
      desc: 'Get beautifully formatted Markdown files ready for your GitHub repository or documentation site.',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      title: 'Auto Update',
      desc: 'Documentation that evolves with your code. Sync changes in seconds with zero manual overhead.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    }
  ];
</script>

<section class="py-32 px-6 relative">
  <div class="max-w-6xl mx-auto w-full relative">
    
    <!-- Smooth BadUI Inspired Header -->
    <div class="text-center mb-28 space-y-8">
      <h2 class="text-5xl md:text-6xl font-black text-brand-ink tracking-tight uppercase">Specs & Docs.</h2>
      <div class="w-24 h-2 bg-brand-accent mx-auto radius-organic-2 confident-stroke"></div>
      <p class="text-brand-ink/70 font-serif italic max-w-xl mx-auto text-xl leading-relaxed">
        "Everything you need to maintain a high-quality developer experience, handcrafted."
      </p>
    </div>

    <!-- Confident Ink Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-14">
      {#each features as feature (feature.title)}
        <div class="ink-card group">
          <div class="space-y-12">
            <!-- Icon with Smooth Ink Style -->
            <div class="w-16 h-16 bg-brand-accent text-brand-ink rounded-lg flex items-center justify-center border-4 border-brand-ink transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 confident-stroke radius-organic-3 shadow-sm">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d={feature.icon} />
              </svg>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-3xl font-black text-brand-ink uppercase leading-none">{feature.title}</h3>
              <p class="text-brand-ink/80 leading-relaxed font-serif italic text-lg opacity-90">
                {feature.desc}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Final Callout -->
    <div class="mt-36 text-center">
       <div class="inline-block p-1 bg-brand-ink radius-organic-1 box-shadow-[4px_4px_0px_#fbbf24]">
          <div class="bg-white px-10 py-4 font-black uppercase tracking-tighter text-sm confident-stroke radius-organic-1">
             ✨ trusted by 1,200+ engineering teams
          </div>
       </div>
    </div>
  </div>
</section>
