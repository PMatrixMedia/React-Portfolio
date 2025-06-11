'use strict';

const fs = require('fs');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
// const ignoredFiles = require('react-dev-utils/ignoredFiles'); // Not used directly in this file anymore
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function (proxy, allowedHost) {
  return {
    allowedHosts: (!proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true') ? 'all' : [allowedHost].filter(Boolean),
    host: host,
    // https: protocol === 'https', // <<< REMOVE THIS LINE

    // --- ADD/MODIFY 'server' option for HTTPS ---
    server: protocol === 'https' ? { type: 'https' } : undefined,

    compress: true,
    hot: true,
    client: {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    static: {
      directory: paths.appPublic,
      publicPath: paths.publicUrlOrPath, // <<< CHANGED TO STRING
      watch: true,
    },
    // watchFiles: { // <<< REMOVE THIS ENTIRE 'watchFiles' BLOCK
    //   ignored: ignoredFiles(paths.appSrc),
    // },
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath + 'index.html',
    },
    proxy,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      devServer.app.use(errorOverlayMiddleware());
      devServer.app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(devServer.app);
      }
      return middlewares;
    },
  };
};