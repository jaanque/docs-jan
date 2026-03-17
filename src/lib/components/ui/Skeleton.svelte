<script lang="ts">
  let { 
    class: className = '', 
    width = 'w-full', 
    height = 'h-4', 
    rounded = 'rounded-md' 
  } = $props();
</script>

<div 
  class="relative overflow-hidden bg-slate-100 {width} {height} {rounded} {className}"
  aria-hidden="true"
>
  <div class="absolute inset-0 animate-shimmer"></div>
</div>
