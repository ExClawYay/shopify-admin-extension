import { shopifyApp } from '@shopify/shopify-app-express';

// Initialize Shopify App with full control scopes (excluding payments)
const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecret: process.env.SHOPIFY_API_SECRET,
  scopes: [
    // Products & Inventory
    'write_products',
    'read_products',
    'write_inventory',
    'read_inventory',
    'write_locations',
    'read_locations',
    
    // Orders & Fulfillment
    'write_orders',
    'read_orders',
    'write_fulfillments',
    'read_fulfillments',
    'write_draft_orders',
    'read_draft_orders',
    'write_checkouts',
    'read_checkouts',
    
    // Customers
    'write_customers',
    'read_customers',
    
    // Themes & Content
    'write_themes',
    'read_themes',
    'write_content',
    'read_content',
    
    // Shipping & Discounts
    'write_shipping',
    'read_shipping',
    'write_discounts',
    'read_discounts',
    
    // Files & Publications
    'write_files',
    'read_files',
    'write_publications',
    'read_publications',
    
    // Analytics & Reports
    'write_analytics',
    'read_analytics',
    'write_reports',
    'read_reports',
    
    // Apps & Settings
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
