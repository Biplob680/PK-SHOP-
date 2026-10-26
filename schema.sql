-- PK SHOP initial schema for Supabase PostgreSQL
-- Review this file before applying it to a production database.
create extension if not exists pgcrypto;

create type public.app_role as enum ('customer', 'admin', 'staff');
create type public.order_status as enum ('pending', 'confirmed', 'packed', 'courier_booked', 'shipped', 'delivered', 'cancelled', 'returned');
create type public.payment_status as enum ('unpaid', 'pending', 'paid', 'failed', 'refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text unique,
  role public.app_role not null default 'customer',
  preferred_locale text not null default 'bn' check (preferred_locale in ('bn','en')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.categories(id) on delete set null,
  slug text not null unique,
  name_bn text not null,
  name_en text not null,
  icon text,
  image_url text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  sku text unique,
  slug text not null unique,
  category_id uuid references public.categories(id) on delete set null,
  name_bn text not null,
  name_en text not null,
  description_bn text,
  description_en text,
  price numeric(12,2) not null check (price >= 0),
  compare_at_price numeric(12,2) check (compare_at_price is null or compare_at_price >= price),
  cost_price numeric(12,2) check (cost_price is null or cost_price >= 0),
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  reserved_quantity integer not null default 0 check (reserved_quantity >= 0),
  sold_quantity bigint not null default 0 check (sold_quantity >= 0),
  image_urls text[] not null default '{}',
  is_active boolean not null default false,
  is_featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index products_category_idx on public.products(category_id);
create index products_active_idx on public.products(is_active);

create table public.addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  recipient_name text not null,
  phone text not null,
  division text,
  district text,
  area text,
  address_line text not null,
  postal_code text,
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  user_id uuid references public.profiles(id) on delete set null,
  recipient_name text not null,
  recipient_phone text not null,
  delivery_address jsonb not null,
  status public.order_status not null default 'pending',
  payment_method text not null default 'cod',
  payment_status public.payment_status not null default 'unpaid',
  subtotal numeric(12,2) not null default 0,
  delivery_fee numeric(12,2) not null default 0,
  discount_amount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  customer_note text,
  courier_provider text,
  courier_consignment_id text,
  courier_tracking_url text,
  courier_booking_status text not null default 'not_requested',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index orders_status_idx on public.orders(status);
create index orders_created_idx on public.orders(created_at desc);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name_bn text not null,
  product_name_en text not null,
  sku text,
  unit_price numeric(12,2) not null,
  quantity integer not null check (quantity > 0),
  line_total numeric(12,2) generated always as (unit_price * quantity) stored
);

create table public.inventory_movements (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete restrict,
  movement_type text not null check (movement_type in ('stock_in','sale','reservation','release','return','adjustment')),
  quantity_delta integer not null,
  reference_type text,
  reference_id uuid,
  note text,
  actor_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  order_item_id uuid references public.order_items(id) on delete set null,
  rating integer not null check (rating between 1 and 5),
  title text,
  body text,
  is_verified_purchase boolean not null default false,
  is_approved boolean not null default false,
  created_at timestamptz not null default now(),
  unique(product_id, user_id, order_item_id)
);

create table public.wishlists (
  user_id uuid not null references public.profiles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key(user_id, product_id)
);

create table public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  discount_type text not null check (discount_type in ('fixed','percent')),
  discount_value numeric(12,2) not null check (discount_value > 0),
  min_order_amount numeric(12,2) not null default 0,
  max_uses integer,
  used_count integer not null default 0,
  starts_at timestamptz,
  expires_at timestamptz,
  is_active boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.payment_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  provider text not null,
  provider_transaction_id text,
  event_type text not null,
  payload jsonb,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.courier_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  provider text not null,
  provider_consignment_id text,
  event_type text not null,
  payload jsonb,
  created_at timestamptz not null default now()
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id text,
  details jsonb,
  created_at timestamptz not null default now()
);

-- RLS is enabled by default policy below; production-specific policies must be added.
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.addresses enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.inventory_movements enable row level security;
alter table public.reviews enable row level security;
alter table public.wishlists enable row level security;
alter table public.coupons enable row level security;
alter table public.payment_events enable row level security;
alter table public.courier_events enable row level security;
alter table public.audit_logs enable row level security;

-- Public catalog read policies. Only active products/categories are public.
create policy "public read active categories" on public.categories for select using (is_active = true);
create policy "public read active products" on public.products for select using (is_active = true);
create policy "public read approved reviews" on public.reviews for select using (is_approved = true);

-- NOTE: No client write policies are intentionally provided here.
-- Add strict admin policies based on profiles.role and server-side authorization
-- before connecting the Admin UI. Never expose the service-role key to browsers.
