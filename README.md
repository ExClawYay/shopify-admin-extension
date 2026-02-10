# Shopify Admin API Extension

A Shopify app extension with full admin API control scopes (excluding payments). This extension grants complete access to manage Shopify stores.

## Features

- Full admin API scopes enabled (all store management except payments)
- TypeScript support
- Express.js backend
- Environment-based configuration
- Webhook support

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your `.env` file with Shopify credentials:
```bash
cp .env.example .env
```

3. Build the extension:
```bash
npm run build
```

4. Start the development server:
```bash
npm run dev
```

## API Scopes

This extension includes comprehensive store management scopes:

**Products & Inventory:**
- `write_products`, `read_products`
- `write_inventory`, `read_inventory`
- `write_locations`, `read_locations`

**Orders & Fulfillment:**
- `write_orders`, `read_orders`
- `write_fulfillments`, `read_fulfillments`
- `write_draft_orders`, `read_draft_orders`
- `write_checkouts`, `read_checkouts`

**Customers:**
- `write_customers`, `read_customers`

**Themes & Content:**
- `write_themes`, `read_themes`
- `write_content`, `read_content`

**Shipping & Discounts:**
- `write_shipping`, `read_shipping`
- `write_discounts`, `read_discounts`

**Files & Publications:**
- `write_files`, `read_files`
- `write_publications`, `read_publications`

**Analytics & Reports:**
- `write_analytics`, `read_analytics`
- `write_reports`, `read_reports`

**Apps & Settings:**
- `write_apps`, `read_apps`
- `write_settings`, `read_settings`

## What You Can Do

- Manage all products, inventory, and locations
- Create, modify, and fulfill orders
- Manage customer data
- Modify themes and store content
- Control shipping and discount policies
- Manage files and publications
- Access analytics and reports
- Install/configure other apps
- Modify store settings

## What This Cannot Do

- Access or modify payment information
- Change billing/subscription settings
- Access financial reports
- Manage merchant accounts

## License

MIT
