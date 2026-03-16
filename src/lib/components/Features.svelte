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

<section class="py-20 px-8 relative bg-slate-50/30">
  <div class="max-w-6xl mx-auto w-full">
    
    <!-- Centralized Header -->
    <div class="mb-16 border-l-4 border-brand-accent pl-8 py-2">
      <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">
        Technical Capabilities
      </h2>
      <p class="text-slate-500 font-bold mt-2 text-sm max-w-lg">
        "Integrated Documentation Lifecycle Management for modern engineering teams."
      </p>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each features as feature (feature.title)}
        <div class="bg-white border border-brand-border rounded-xl p-8 hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-6">
          <!-- Icon Square -->
          <div class="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
            </svg>
          </div>
          
          <div class="space-y-2">
            <h3 class="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">{feature.title}</h3>
            <p class="text-slate-500 text-sm font-bold leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Proof of Trust -->
    <div class="mt-20 border-t border-brand-border pt-8 flex items-center justify-center gap-4 opacity-60 grayscale">
       <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Deployed in 1,200+ production clusters</span>
    </div>
  </div>
</section>
