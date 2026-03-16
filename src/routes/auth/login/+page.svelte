<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { resolve } from '$app/paths';

  let email = $state('');
  let password = $state('');
  let loading = $state(false);
  let message = $state('');

  async function handleLogin() {
    loading = true;
    message = '';
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      message = error.message;
    } else {
      message = '¡Login exitoso!';
      window.location.href = resolve('/');
    }
    loading = false;
  }

  async function loginWithProvider(provider: 'google' | 'github') {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin
      }
    });
  }
</script>

<div class="min-h-full flex items-center justify-center bg-white px-6 py-12">
  <div class="w-full max-w-[400px] flex flex-col items-center">
    
    <!-- Header Branding -->
    <div class="text-center mb-8 w-full">
      <h1 class="text-[32px] font-black text-slate-900 tracking-tight leading-tight mb-2">
        Bienvenido a codocs
      </h1>
      <p class="text-[15px] text-slate-500 font-medium">
        ¿No tienes cuenta? 
        <a href={resolve('/auth/register')} class="text-brand-accent hover:text-brand-accent-hover transition-colors inline-flex items-center gap-1 font-bold">
          Regístrate <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </p>
    </div>

    <!-- Auth Form Content -->
    <div class="w-full space-y-6">
      
      <!-- Email Step -->
      <form onsubmit={handleLogin} class="space-y-4">
        <div class="space-y-2">
          <label for="email" class="text-[14px] font-bold text-slate-900">Ingresa tu email</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-accent transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <input 
              type="email" 
              id="email" 
              bind:value={email}
              placeholder="name@email.com"
              class="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white text-[15px] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent transition-premium"
              required
            />
          </div>
        </div>

        <div class="space-y-2">
          <label for="password" class="text-[14px] font-bold text-slate-900">Contraseña</label>
          <div class="relative group">
            <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-accent transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <input 
              type="password" 
              id="password" 
              bind:value={password}
              placeholder="••••••••"
              class="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white text-[15px] font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent transition-premium"
              required
            />
          </div>
        </div>

        {#if message}
          <p class="text-[13px] font-bold text-center {message.includes('exitoso') ? 'text-brand-success' : 'text-red-500'}">
            {message}
          </p>
        {/if}

        <button 
          type="submit" 
          disabled={loading}
          class="w-full h-12 bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-50 text-white font-bold rounded-xl transition-premium shadow-sm shadow-brand-accent/20"
        >
          {loading ? 'Cargando...' : 'Continuar'}
        </button>
      </form>

      <!-- Divider -->
      <div class="relative pt-2 pb-2">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-slate-100"></div>
        </div>
        <div class="relative flex justify-center text-[12px] uppercase font-black tracking-widest text-slate-300">
          <span class="bg-white px-4">O</span>
        </div>
      </div>

      <!-- Social Providers -->
      <div class="grid grid-cols-2 gap-3 pb-2">
        <button 
          onclick={() => loginWithProvider('google')}
          class="h-12 flex items-center justify-center gap-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-premium group"
          title="Continuar con Google"
        >
          <svg class="w-5 h-5 overflow-visible" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span class="text-[14px] font-bold text-slate-700">Google</span>
        </button>

        <button 
          onclick={() => loginWithProvider('github')}
          class="h-12 flex items-center justify-center gap-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-premium group"
          title="Continuar con GitHub"
        >
          <svg class="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          <span class="text-[14px] font-bold text-slate-700">GitHub</span>
        </button>
      </div>

      <!-- Footer Policy -->
      <p class="text-center text-[13px] text-slate-500 font-medium leading-relaxed px-4">
        Al iniciar sesión, aceptas nuestros 
        <button type="button" class="text-slate-900 underline hover:text-brand-accent bg-transparent border-none p-0 cursor-pointer">Términos de servicio</button> 
        y 
        <button type="button" class="text-slate-900 underline hover:text-brand-accent bg-transparent border-none p-0 cursor-pointer">Política de Privacidad</button>.
      </p>
    </div>
  </div>
</div>
