import shopify from './shopify';

const app = shopify.app();

// Admin API Route - Full Access with All Scopes
app.get('/api/admin/access', async (req, res) => {
  try {
    const session = await shopify.sessionStorage.loadSession(req.query.shop as string);
    
    if (!session) {
      return res.status(401).json({ error: 'No active session' });
    }

    // Return admin access details
    res.json({
      shop: session.shop,
      accessToken: session.accessToken,
      scopes: session.scope?.split(','),
      isOnline: session.isOnline,
      expiresAt: session.expiresAt,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve admin access' });
  }
});

// Initialize webhook endpoints
app.post('/webhooks/app/installed', async (req, res) => {
  res.status(200).send('OK');
});

export default app;
