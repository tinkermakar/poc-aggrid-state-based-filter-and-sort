module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // v.1.2 (2021-01-16)
    'arrow-parens': [1, 'as-needed'],
    'brace-style': [1, 'stroustrup'],
    'class-methods-use-this': 0,
    'func-names': [1, 'always', { generators: 'never' }],
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'linebreak-style': 0,
    'object-curly-newline': [
      0,
      {
        ObjectExpression: 'always',
        ObjectPattern: { minProperties: 2 },
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
  },
};
