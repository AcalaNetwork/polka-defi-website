module.exports = {
    extends: [
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended'
    ],
    plugins: ['react', '@typescript-eslint'],
    env: {
      browser: true,
      es6: true
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'react/jsx-props-no-spreading': [0],
      'react/prop-types': [0]
    },
  };