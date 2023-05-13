module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
  },
};
