module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 0,
    'no-param-reassign': 0,
    'no-shadow': ['error', { allow: ['state'] }],
    'max-len': ['error', { code: 500 }],
    'vue/multi-word-component-names': ['error', {
      ignores: ['index'],
    }],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'], // these modules are included in nuxt.js
  },
  overrides: [
    {
      files: ['layouts/default.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
