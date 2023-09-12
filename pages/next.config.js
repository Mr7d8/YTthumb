const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
  cssModules: true, // Enable CSS modules if needed
});
