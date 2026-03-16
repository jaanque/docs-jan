<script lang="ts">
  let activeTab = $state('activo');
  
  const projects = [
    { id: 'RG', name: 'Rahul Gaur / BluConnect SDK - Android - Ather', icon: '🌐', time: 'Se actualizó ahora mismo', stars: 0, forks: 0, issues: 0, merge: 0 },
    { id: 'JS', name: 'Jungsun Kim / AVM', icon: '🌐', time: 'Se actualizó ahora mismo', stars: 0, forks: 0, issues: 5, description: 'AVM (AVM Video Model) is the reference software for next codec from Alliance for Open Media.' },
    { id: 'LB', name: 'Luitel Biva / Automate CI CD', icon: '🌐', time: 'Se actualizó ahora mismo', stars: 0, forks: 0, issues: 0, merge: 0 },
    { id: 'T', name: 'test / mytest', icon: '🌐', time: 'Se actualizó ahora mismo', stars: 0, forks: 0, issues: 0, merge: 0 },
    { id: 'P', name: 'PublicMirrorRokk3r / Dev16', icon: '🌐', time: 'Se actualizó hace 10 segundos', stars: 0, forks: 0, issues: 0, merge: 0 },
  ];
</script>

<div class="max-w-6xl mx-auto py-8 px-8 flex flex-col">
  <div class="mb-6">
    <div class="text-[11px] font-black text-slate-400 mb-1 uppercase tracking-widest leading-none">Perspective / <span class="text-brand-accent">Projects</span></div>
    <h1 class="text-3xl font-black text-slate-900 tracking-tight leading-tight">Project Overview</h1>
    <p class="text-slate-500 text-sm max-w-2xl font-bold mt-1">Access and synchronize engineering documentation across your infrastructure.</p>
  </div>

  <!-- Tabs Navigation -->
  <div class="flex border-b border-brand-border mb-6">
    <button class="eng-tab" class:active={activeTab === 'activo'} onclick={() => activeTab = 'activo'}>Active</button>
    <button class="eng-tab" class:active={activeTab === 'inactivo'} onclick={() => activeTab = 'inactivo'}>Inactive</button>
    <button class="eng-tab" class:active={activeTab === 'tendencia'} onclick={() => activeTab = 'tendencia'}>Trending</button>
  </div>

  <!-- Search & Filter Bar -->
  <div class="flex flex-col md:flex-row gap-3 mb-6 items-center">
    <div class="flex-1 relative w-full group">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <input type="text" placeholder="Search projects..." class="eng-input pl-10 h-10" />
    </div>
    
    <div class="flex gap-2 w-full md:w-auto">
      <select class="eng-input px-3 md:min-w-[200px] h-10 appearance-none cursor-pointer font-bold">
        <option>Last activity</option>
        <option>Star count</option>
      </select>
      <button class="eng-btn-secondary px-3 aspect-square flex items-center justify-center p-0! h-10" title="Sort order">
        <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
      </button>
    </div>
  </div>

  <!-- Premium Project Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
    {#each projects as project (project.name)}
      <div class="eng-card group">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm group-hover:border-brand-accent/40 group-hover:bg-white transition-premium">
              {project.id}
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-slate-900 group-hover:text-brand-accent transition-premium flex items-center gap-2 truncate">
                {project.name.split('/').pop()}
                {#if project.issues > 0}
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                {/if}
              </h3>
              <p class="text-[11px] text-slate-400 font-medium truncate mt-0.5">{project.name}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="px-2 py-0.5 bg-slate-100/80 text-slate-600 rounded-md text-[9px] font-bold uppercase tracking-wider border border-slate-200/50">Public</span>
          </div>
        </div>

        <div class="mt-4 flex flex-col h-full justify-between">
          {#if project.description}
            <p class="text-[12px] text-slate-500 font-normal leading-relaxed line-clamp-2">
              {project.description}
            </p>
          {:else}
            <p class="text-[12px] text-slate-400 italic">No description provided for this repository.</p>
          {/if}

          <div class="mt-5 flex items-center justify-between pt-4 border-t border-slate-100/60">
            <div class="flex items-center gap-4 text-slate-400">
              <div class="flex items-center gap-1 hover:text-brand-accent cursor-pointer transition-colors" title="Stars">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span class="text-[11px] font-bold">{project.stars}</span>
              </div>
              <div class="flex items-center gap-1 hover:text-brand-accent cursor-pointer transition-colors" title="Forks">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                <span class="text-[11px] font-bold">{project.forks}</span>
              </div>
            </div>
            <span class="text-[10px] font-bold text-slate-400">{project.time.replace('Se actualizó ','')}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
