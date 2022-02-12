import { resolve } from 'path';

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-todo-list/',
  },
} : {};

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-todo-list',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/svg-icon',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: false,
        },
        strategy: 'no_prefix',
        locales: [
          {
            name: '繁體中文',
            code: 'tw',
            iso: 'zh-TW',
            file: 'tw.js',
          },
          {
            name: '简体中文',
            code: 'cn',
            iso: 'zh-CN',
            file: 'cn.js',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en.js',
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'tw',
        lazy: true,
      },
    ],
  ],

  styleResources: {
    scss: [
      'assets/scss/util/_variables.scss',
      'assets/scss/util/_mixins.scss',
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));
      svgRule.exclude = [resolve(__dirname, 'assets/img/icons')];
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'assets/img/icons')],
        use: [
          { loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } },
        ],
      });
    },
  },

  ...routerBase,
};
