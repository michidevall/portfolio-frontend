module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api", , "/otherApi"], { target: "http://127.0.0.1:8000" })
    );
  };