<script lang="ts">
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

  let { isOpen, onClose }: Props = $props();

  const options = [
    {
      id: 'github',
      title: 'Importar desde GitHub',
      description: 'Conecta tu repositorio y sincroniza tu documentación automáticamente.'
    },
    {
      id: 'upload',
      title: 'Subir archivos .md',
      description: 'Arrastra y suelta tus archivos Markdown para crear un proyecto instantáneo.'
    },
    {
      id: 'blank',
      title: 'Crear documento en blanco',
      description: 'Empieza desde cero con nuestro editor inteligente de ingeniería.'
    }
  ];
</script>

{#snippet GitHubIcon()}
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
{/snippet}

{#snippet UploadIcon()}
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
{/snippet}

{#snippet BlankIcon()}
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
{/snippet}

{#if isOpen}
  <!-- Overlay -->
  <div 
    class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-100 transition-opacity duration-300"
    onclick={onClose}
    aria-hidden="true"
  ></div>

  <!-- Modal content -->
  <div class="fixed inset-0 flex items-center justify-center z-101 p-4 pointer-events-none">
    <div 
      class="bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto transition-premium scale-100"
      role="dialog"
      aria-modal="true"
    >
      <div class="p-8">
        <div class="flex justify-between items-start mb-8">
          <div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">Nuevo Proyecto</h2>
            <p class="text-slate-500 font-bold mt-1">Elige cómo quieres empezar tu documentación</p>
          </div>
          <button 
            onclick={onClose}
            class="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div class="space-y-4">
          {#each options as option (option.id)}
            <button 
              class="w-full flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-premium group text-left"
            >
              <div class="w-12 h-12 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-brand-accent group-hover:shadow-sm transition-premium">
                {#if option.id === 'github'}
                  {@render GitHubIcon()}
                {:else if option.id === 'upload'}
                  {@render UploadIcon()}
                {:else if option.id === 'blank'}
                  {@render BlankIcon()}
                {/if}
              </div>
              <div>
                <h3 class="font-black text-slate-800 tracking-tight group-hover:text-brand-accent transition-colors">{option.title}</h3>
                <p class="text-[13px] text-slate-500 font-bold mt-1 leading-relaxed">{option.description}</p>
              </div>
            </button>
          {/each}
        </div>
      </div>

      <div class="bg-slate-50 p-6 flex justify-center">
        <p class="text-[12px] font-black uppercase tracking-widest text-slate-400">
          Explora más métodos en <span class="text-brand-accent">codocs.dev/guide</span>
        </p>
      </div>
    </div>
  </div>
{/if}
