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
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': [1, { exceptions: ['Component'] }],
    'import/extensions': [1, 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'max-len': [0],
  },
};
