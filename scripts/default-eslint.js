const { createEslintConfig } = require('tsdx/dist/createEslintConfig');
const packageJson = require('../package.json');

createEslintConfig({
  pkg: packageJson,
  rootDir: '.',
  writeFile: true,
});
