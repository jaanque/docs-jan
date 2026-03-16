<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
  <title>CoDoc | GitLab Edition</title>
  <meta name="description" content="Instant engineering documentation browser." />
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen overflow-hidden">
  <!-- GitLab Sidebar (Same color as body BG) -->
  <aside class="w-64 shrink-0 hidden lg:flex flex-col">
    <div class="p-4 flex items-center gap-3">
      <div class="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-black text-xs">CD</div>
      <span class="font-bold text-lg tracking-tight">CoDoc</span>
    </div>

    <nav class="mt-4 flex flex-col flex-1 overflow-y-auto">
      <div class="px-5 mb-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Explorar</div>
      <div class="gitlab-sidebar-item active">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        Proyectos
      </div>
      <div class="gitlab-sidebar-item">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        Grupos
      </div>
      <div class="gitlab-sidebar-item">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        Catálogo CI/CD
      </div>
    </nav>
    
    <div class="p-4 text-xs text-gray-500 font-medium">
      <div class="flex items-center gap-2 mb-2 cursor-pointer hover:text-black">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Ayuda
      </div>
      <div class="flex items-center gap-2 cursor-pointer hover:text-black">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
        Contraer barra lateral
      </div>
    </div>
  </aside>

  <!-- Main Content Area -->
  <main class="flex-1 flex flex-col min-w-0">
    <!-- Top Nav (Same color as body BG) -->
    <header class="h-12 flex items-center justify-between px-4 shrink-0">
      <div class="flex items-center gap-8 flex-1">
        <div class="flex items-center gap-6 text-[14px] font-medium text-gray-700">
          <span class="cursor-pointer hover:text-black">Porqué GitLab</span>
          <span class="cursor-pointer hover:text-black">Precios</span>
          <span class="cursor-pointer hover:text-black">Explorar</span>
        </div>
        <div class="relative w-full max-w-sm ml-auto">
          <input type="text" placeholder="Buscar o ir a..." class="gitlab-input pl-8 bg-white!" />
          <svg class="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <div class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] bg-gray-100 border border-brand-border rounded px-1.5 py-0.5 font-mono text-gray-500">/</div>
        </div>
      </div>
      
      <div class="flex items-center gap-3 ml-4">
        <button class="gitlab-btn-primary">Obtener prueba gratuita</button>
        <button class="gitlab-btn-secondary">Iniciar sesión</button>
      </div>
    </header>

    <!-- Page Content within a rounded Box -->
    <div class="gitlab-content-box">
      <div class="h-full overflow-y-auto px-1">
        {@render children()}
      </div>
    </div>
  </main>
</div>
