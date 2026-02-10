# Shopify Admin API Extension

A Shopify app extension with full admin API control scopes. This extension grants access to all critical Shopify Admin API endpoints.

## Features

- Full admin API scopes enabled (products, orders, customers, inventory, analytics, settings, apps)
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

This extension includes the following full-control scopes:
- `write_products`, `read_products`
- `write_orders`, `read_orders`
- `write_fulfillments`, `read_fulfillments`
- `write_inventory`, `read_inventory`
- `write_customers`, `read_customers`
- `write_analytics`, `read_analytics`
- `write_apps`, `read_apps`
- `write_settings`, `read_settings`

## License

MIT
