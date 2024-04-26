/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended' // 放在最后
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'prettier/prettier': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
