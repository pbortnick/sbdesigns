module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react',
		'@typescript-eslint'
  ],
	parser: '@typescript-eslint/parser',

  rules: {
  },
	root: true,

}
