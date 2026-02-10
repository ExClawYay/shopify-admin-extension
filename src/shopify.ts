import { shopifyApp } from '@shopify/shopify-app-express';

// Initialize Shopify App with full control scopes
const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecret: process.env.SHOPIFY_API_SECRET,
  scopes: [
    'write_products',
    'read_products',
    'write_orders',
    'read_orders',
    'write_fulfillments',
    'read_fulfillments',
    'write_inventory',
    'read_inventory',
    'write_customers',
    'read_customers',
    'write_analytics',
    'read_analytics',
    'write_apps',
    'read_apps',
    'write_settings',
    'read_settings',
  ],
  host: process.env.SHOPIFY_APP_URL,
  apiVersion: '2024-01',
  isEmbeddedApp: true,
});

export default shopify;
