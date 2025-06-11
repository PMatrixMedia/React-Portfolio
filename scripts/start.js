'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config.dev');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);
const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(`Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`);
  console.log();
}

choosePort(HOST, DEFAULT_PORT)
  .then(async port => { // <<< Made the .then callback async
    if (port == null) {
      return;
    }

    const webpackConfig = configFactory;
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);

    const compiler = createCompiler({
      appName,
      config: webpackConfig,
      urls,
      useYarn,
      webpack,
    });

    const proxySetting = require(paths.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths.appPublic, paths.publicUrlOrPath);
    const serverConfig = createDevServerConfig(proxyConfig, urls.lanUrlForConfig);
    const devServer = new WebpackDevServer(serverConfig, compiler);

    try {
      await devServer.start(); // <<< Use await devServer.start()

      if (isInteractive) {
        clearConsole();
      }
      console.log(chalk.cyan('Starting the development server...\n'));
      openBrowser(urls.localUrlForBrowser);

    } catch (err) {
      if (err) {
        console.log(chalk.red('Failed to start webpack-dev-server:'));
        console.log(err);
      }
      process.exit(1);
      return;
    }

    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, async function () { // <<< Made signal handler async
        console.log(chalk.yellow('Gracefully shutting down. Please wait...'));
        try {
          await devServer.stop(); // <<< Use await devServer.stop()
          console.log(chalk.green('Dev server closed.'));
        } catch (e) {
          console.error(chalk.red('Error closing dev server:'), e);
        }
        process.exit();
      });
    });

    if (process.env.CI !== 'true') {
      process.stdin.on('end', async function () { // <<< Made stdin handler async
        try {
          await devServer.stop(); // <<< Use await devServer.stop()
        } catch (e) {
          // ignore
        }
        process.exit();
      });
    }
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });