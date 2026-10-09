# VendaFácil

Production-oriented MVP for restaurants, convenience stores, açai and ice-cream shops. A tenant owns its menu and orders; all product/order queries require `shopId` to preserve tenant isolation.

## Local setup

Requirements: Node 20+, Docker.

```bash
cp .env.example .env
npm install
docker compose up -d db
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Open `http://localhost:3000/menu/demo`, admin at `/admin`, and health at `/api/health`.

## Environment

- `DATABASE_URL`: PostgreSQL connection string, e.g. `postgresql://vendafacil:local_dev_only@localhost:5432/vendafacil?schema=public`
- `NEXT_PUBLIC_APP_URL`: public application URL

Never commit `.env` or real credentials.

## Coolify deploy

Create a PostgreSQL resource and a Git-based application from this repository using the **Railpack** build pack and the configured GitHub App source. Set `DATABASE_URL` and `NEXT_PUBLIC_APP_URL` in the application environment, expose port `3000`, and configure the public health path as `/api/health`. Run `npx prisma@6.19.0 migrate deploy` as a one-off/release command before first traffic, then seed only if desired (`npx tsx@4.23.15 prisma/seed.ts`). Railpack runs the package build script, which generates the Prisma client before `next build`. Coolify can provide TLS and the public domain; no paid/external service is required.

The Dockerfile remains as a local/container fallback, but the production Coolify application is configured for Railpack.

## Features

- Prisma PostgreSQL schema with Shop, Category, Product, Order and OrderItem.
- Tenant-scoped product reads/writes and order creation with server-side price calculation.
- Zod validation for user input and safe order quantities.
- Public responsive menu route and lightweight admin product panel.
- Order status API and health endpoint.
- Domain tests for cart validation, integer-cent pricing and status transitions.
