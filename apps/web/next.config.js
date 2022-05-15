const withTM = require("next-transpile-modules")(["ui", "theme"]);

module.exports = withTM({
  reactStrictMode: true,
});
