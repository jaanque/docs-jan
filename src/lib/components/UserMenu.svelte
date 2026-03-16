<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { user } from '$lib/authStore';
  import { resolve } from '$app/paths';

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = resolve('/');
  }

  // Helper to get initials or first char of email
  function getInitials(email: string | undefined) {
    if (!email) return '?';
    return email.charAt(0).toUpperCase();
  }
</script>

<div class="flex items-center gap-3 pl-4 border-l border-slate-200">
  <div class="flex flex-col items-end mr-1">
    <span class="text-[13px] font-black text-slate-900 leading-none mb-1">
      {$user?.email?.split('@')[0]}
    </span>
    <span class="text-[11px] font-bold text-slate-400 leading-none">
      {$user?.email}
    </span>
  </div>

  <div class="relative group">
    <button class="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent font-black transition-premium hover:bg-brand-accent/20">
      {getInitials($user?.email)}
    </button>
    
    <!-- Simple Dropdown -->
    <div class="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-premium z-50 p-2">
      <button 
        onclick={handleLogout}
        class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Cerrar sesión
      </button>
    </div>
  </div>
</div>
