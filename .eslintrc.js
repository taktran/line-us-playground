module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'no-only-tests'],
  overrides: [
    {
      files: ['test/**/*.js'],
      rules: {
        'no-only-tests/no-only-tests': 2
      }
    }
  ],
  rules: {
    eqeqeq: 2,
    'guard-for-in': 2,
    'new-cap': 0,
    'no-caller': 2,
    'no-console': 2,
    'no-extend-native': 2,
    'no-irregular-whitespace': 2,
    'no-loop-func': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': 2,
    'no-var': 2,
    'one-var': [2, 'never']
  }
};
