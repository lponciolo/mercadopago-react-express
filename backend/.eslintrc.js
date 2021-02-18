module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-jest'],
  rules: {
    'new-cap': 0,
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],
    ...require('eslint-config-prettier').rules,
    ...require('eslint-config-prettier/@typescript-eslint').rules,
  },
}
