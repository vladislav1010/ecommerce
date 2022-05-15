const withTM = require("next-transpile-modules")(["landing-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
