const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@edu-mendes/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});