module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "max-len" : ["error", {code : 200}],
    "object-curly-newline": ["error", {
      "ImportDeclaration": { "consistent": true },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    'no-nested-ternary': 'off',
    'import/extensions': [
      'error',
      {
        '.js': 'never',
        '.jsx': 'never',
        '.vue': 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
