module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': ['error', 2, {
      'CallExpression': { 'arguments': 2 },
      'FunctionDeclaration': { 'body': 1, 'parameters': 2 },
      'FunctionExpression': { 'body': 1, 'parameters': 2 },
      'MemberExpression': 1,
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': { 'delimiter': 'none' },
      'singleline': { 'delimiter': 'comma' },
    }],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'curly': ['error', 'all'],
    'max-depth': ['error', { 'max': 4 }],
    'max-len': ['error', {
      'code': 80,
      'tabWidth': 2,
      'ignorePattern': '(^import.*from|(interface|class).*(extends|implements)|^ \\* ).*',
      'ignoreStrings': true }],
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-console': 'error',
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': ['error'],
    'space-before-blocks': ['error', 'always'],
  },
}