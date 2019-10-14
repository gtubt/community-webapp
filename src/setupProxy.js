const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/posts",
    proxy({
      target: "http://localhost:4000",
      logLevel: "debug",
      changeOrigin: true
    })
  );
};
