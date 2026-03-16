-- Limpieza previa transparente (por si falló a medias)
drop table if exists projects cascade;

-- Tabla completa para proyectos sin datos hardcodeados
create table projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  user_id uuid references auth.users not null,
  name text not null,
  slug text not null unique,
  description text,
  color text default 'bg-slate-200',
  short_id text not null, 
  logo_url text, -- La URL de la imagen guardada
  stars int default 0,
  forks int default 0,
  issues int default 0,
  status text default 'synced', 
  language text,
  language_color text,
  last_accessed_at timestamptz default now()
);

-- Habilitar RLS
alter table projects enable row level security;

-- Políticas de seguridad
create policy "Users can view their own projects" 
  on projects for select 
  using (auth.uid() = user_id);

create policy "Users can insert their own projects" 
  on projects for insert 
  with check (auth.uid() = user_id);

create policy "Users can update their own projects" 
  on projects for update 
  using (auth.uid() = user_id);

create policy "Users can delete their own projects" 
  on projects for delete 
  using (auth.uid() = user_id);

-- Función y trigger para updated_at automático
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
before update on projects
for each row
execute function handle_updated_at();
