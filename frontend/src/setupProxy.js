const { createProxyMiddleware } = require('http-proxy-middleware');
     
    module.exports = function(app) {
        app.use(createProxyMiddleware('/api/**', { target: 'https://backendport-31dbfb5a9023.herokuapp.com/' }));
        app.use(createProxyMiddleware('/otherApi/**', { target: 'http://127.0.0.1:8000' }));
    };