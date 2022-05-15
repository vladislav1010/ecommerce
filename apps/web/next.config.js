const withTM = require("next-transpile-modules")([
  "landing-ui",
  "landing-theme",
]);

module.exports = withTM({
  reactStrictMode: true,
});
