'use strict';

// If using CommonJS (Node.js), keep the following lines:
const path = require('path');
const fs = require('fs');
const url = require('url');

// If using ESM (ECMAScript Modules), comment out the above and use the following imports instead:
// import path from 'path';
// import fs from 'fs';
// import url from 'url';

// NOTE: We are removing "import { createRequire }" and related ESM-specific code.
// require() will work directly for JSON in a CommonJS module.

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}

const getPublicUrl = appPackageJsonPath =>
  envPublicUrl || require(appPackageJsonPath).homepage; // Standard CommonJS require for JSON

function getServedPath(appPackageJsonPath) {
  const publicUrlValue = getPublicUrl(appPackageJsonPath);
  const servedUrl =
    envPublicUrl || (publicUrlValue ? url.parse(publicUrlValue).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const appPackageJsonPath = resolveApp('package.json');
const servedPathValue = getServedPath(appPackageJsonPath);

// Use module.exports for CommonJS
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: appPackageJsonPath,
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(appPackageJsonPath),
  servedPath: servedPathValue,
  publicUrlOrPath: servedPathValue, // Keep this for consistency with react-dev-utils
};