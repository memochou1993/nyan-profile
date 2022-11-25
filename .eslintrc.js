module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': [1, 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': [0],
    'react/require-default-props': [0],
    'max-len': [0],
  },
};
