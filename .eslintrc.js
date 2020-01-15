module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    // 'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "vue/no-unused-vars":1,
    "vue/valid-v-model":"off",
    "no-console":"off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "camelcase": "off",
    "vue/multiline-html-element-content-newline":0
  }
}
