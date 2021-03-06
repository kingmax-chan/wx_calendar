module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['prettier', 'standard'],
  rules: {
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': 1
  },
  globals: {
    App: true,
    Page: true,
    getApp: true,
    getCurrentPages: true,
    wx: true
  }
};
