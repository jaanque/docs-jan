<script lang="ts">
  import type { PageData } from './$types';
  import { resolve } from '$app/paths';

  let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
  <title>{data.project.name} | Docs Jan</title>
</svelte:head>

<div class="p-10 max-w-5xl mx-auto">
  <!-- Breadcrumbs -->
  <nav class="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
    <a href={resolve('/')} class="hover:text-slate-900 transition-colors">Proyectos</a>
    <span>/</span>
    <span class="text-slate-400">{data.project.name.split('/')[0]}</span>
    <span>/</span>
    <span class="text-slate-900 font-bold">{data.project.name.split('/')[1]}</span>
  </nav>

  <!-- Header Section -->
  <div class="flex items-start justify-between gap-8 mb-12">
    <div class="flex items-center gap-6">
      <!-- Logo -->
      <div class="w-24 h-24 rounded-3xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center overflow-hidden p-2">
        {#if data.project.logo_url}
          <img src={data.project.logo_url} alt={data.project.name} class="w-full h-full object-cover rounded-2xl" />
        {:else}
          <div class="w-full h-full flex items-center justify-center {data.project.color || 'bg-slate-100'} text-slate-600 font-bold text-2xl rounded-2xl uppercase">
            {data.project.short_id}
          </div>
        {/if}
      </div>

      <!-- Info -->
      <div>
        <h1 class="text-3xl font-black text-slate-900 tracking-tight mb-2">
          {data.project.name.split('/')[1]}
        </h1>
        <p class="text-slate-500 text-lg leading-relaxed max-w-2xl">
          {data.project.description || 'Sin descripción disponible.'}
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="flex gap-3">
      <div class="flex flex-col items-center bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-sm">
        <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Stars</span>
        <span class="text-xl font-black text-slate-900">{data.project.stars}</span>
      </div>
      <div class="flex flex-col items-center bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-sm">
        <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Forks</span>
        <span class="text-xl font-black text-slate-900">{data.project.forks}</span>
      </div>
    </div>
  </div>

  <!-- Content Placeholder -->
  <div class="grid grid-cols-3 gap-8">
    <div class="col-span-2 space-y-6">
      <div class="bg-white border border-slate-200/60 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
        <div class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="font-bold text-slate-900">Documentación próximamente</h3>
        <p class="text-sm text-slate-400 mt-1 max-w-xs">{data.project.name} está en fase de preparación.</p>
      </div>
    </div>

    <div class="space-y-6">
      <div class="bg-slate-50 border border-slate-100 rounded-3xl p-6">
        <h4 class="font-bold text-slate-900 mb-4 text-sm">Información</h4>
        <dl class="space-y-4">
          <div>
            <dt class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lenguaje</dt>
            <dd class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: {data.project.language_color}"></span>
              <span class="text-sm font-semibold text-slate-700">{data.project.language}</span>
            </dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Issues</dt>
            <dd class="text-sm font-semibold text-slate-700">{data.project.issues} abiertos</dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</dt>
            <dd class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
              Activo
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
