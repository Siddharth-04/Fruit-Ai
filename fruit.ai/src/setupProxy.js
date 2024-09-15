const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/translate',
    createProxyMiddleware({
      target: 'https://libretranslate.de',
      changeOrigin: true,
    })
  );
};
