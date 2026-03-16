<div class="flex flex-col md:flex-row gap-4 mb-8 items-center">
  <div class="flex-1 relative w-full group">
    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <svg class="w-4.5 h-4.5 text-slate-400 group-focus-within:text-brand-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input 
      type="text" 
      placeholder="Jump to repository or documentation module..." 
      class="eng-input pl-12 h-12 text-base" 
      aria-label="Filter repositories or modules"
    />
  </div>
  
  <div class="flex gap-2 w-full md:w-auto">
    <select 
      class="eng-input px-4 md:min-w-[220px] h-12 appearance-none cursor-pointer font-bold text-sm"
      aria-label="Sort repositories"
    >
      <option>Last synchronized</option>
      <option>Star count (High to Low)</option>
      <option>Documentation coverage</option>
    </select>
    <button class="eng-btn-secondary px-4 aspect-square flex items-center justify-center p-0! h-12 shadow-sm" title="Advanced Filters" aria-label="Open Advanced Filters">
      <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    </button>
  </div>
</div>
