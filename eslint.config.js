// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    // All logging goes through AppLogger (src/utilities/logger.ts).
    rules: { 'no-console': 'error' },
  },
  {
    files: ['src/utilities/logger.ts'],
    rules: { 'no-console': 'off' },
  },
]);
