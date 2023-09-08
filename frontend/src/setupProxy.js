module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api", , "/otherApi"], { target: "https://backendport-31dbfb5a9023.herokuapp.com/" })
    );
  };