module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    // '@vue/eslint-config-typescript',
    'plugin:prettier/recommended' // 放在最后
    // 'eslint:recommended',
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': [
      // 解决不写后缀报错的问题
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: {}
      // alias: [['@', './src']]
    }
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
