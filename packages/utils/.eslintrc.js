/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@guesung/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  root: true,
};
