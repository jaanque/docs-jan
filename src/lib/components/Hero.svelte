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

<div class="max-w-6xl mx-auto py-6 px-6 flex flex-col">
  <div class="mb-4">
    <div class="text-[13px] text-gray-500 mb-2">Explorar / <span class="text-black font-semibold">Proyectos</span></div>
    <h1 class="text-[28px] font-bold mb-4 tracking-tight">Explorar proyectos</h1>
  </div>

  <!-- Tabs Navigation -->
  <div class="flex border-b border-brand-border mb-6">
    <button class="gitlab-tab" class:active={activeTab === 'activo'} onclick={() => activeTab = 'activo'}>Activo</button>
    <button class="gitlab-tab" class:active={activeTab === 'inactivo'} onclick={() => activeTab = 'inactivo'}>Inactivo</button>
    <button class="gitlab-tab" class:active={activeTab === 'tendencia'} onclick={() => activeTab = 'tendencia'}>Tendencia</button>
  </div>

  <!-- Search & Filter Bar -->
  <div class="flex flex-col md:flex-row gap-2 mb-8 items-center">
    <div class="flex-1 relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none border-r pr-2 h-[20px] top-1/2 -translate-y-1/2">
        <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      </div>
      <input type="text" placeholder="Filtrar o buscar (mínimo 3 caracteres)" class="gitlab-input pl-10" />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
    </div>
    
    <div class="flex gap-2">
      <select class="gitlab-input min-w-[200px] py-1.5 h-[38px]">
        <option>Última fecha de actualización</option>
      </select>
      <button class="gitlab-btn-secondary h-[38px] px-3" title="Filtrar proyectos">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
      </button>
    </div>
  </div>

  <!-- Project List -->
  <div class="border border-brand-border rounded-[4px] bg-white">
    {#each projects as project (project.name)}
      <div class="gitlab-card">
        <div class="flex items-start justify-between">
          <div class="flex gap-3">
            <div class="gitlab-avatar-sm">{project.id}</div>
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <span class="text-[14px] font-bold text-brand-primary hover:text-brand-accent hover:underline cursor-pointer transition-colors duration-150">{project.name}</span>
                <span class="text-xs">{project.icon}</span>
              </div>
              {#if project.description}
                <p class="text-[13px] text-gray-500 mt-0.5 line-clamp-1">{project.description}</p>
              {/if}
            </div>
          </div>
          
          <div class="flex items-center gap-6 text-gray-400">
            <div class="flex flex-col items-end gap-1">
              <div class="flex items-center gap-3 text-xs">
                <span class="flex items-center gap-1 hover:text-black cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>{project.stars}</span>
                <span class="flex items-center gap-1 hover:text-black cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>{project.forks}</span>
                <span class="flex items-center gap-1 hover:text-black cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{project.issues}</span>
                <span class="flex items-center gap-1 hover:text-black cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>{project.merge}</span>
              </div>
              <span class="text-[11px] text-gray-500">{project.time}</span>
            </div>
            <button class="hover:text-black p-1" title="Más opciones">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
