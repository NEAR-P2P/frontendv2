// import { webpack } from 'webpack'
import colors from 'vuetify/es5/util/colors'

const development = process.env.NODE_ENV !== 'production'

export default {
  env: {
    Network: process.env.Network || 'testnet',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
    URL_BACKEND: process.env.URL_BACKEND || 'http://localhost:3000',
    URL_APIP_PRICE: process.env.URL_APIP_PRICE || 'http://localhost:3000',
    URL_API_INDEXER: process.env.URL_API_INDEXER || 'http://localhost:3000',
    CLIEN_ID_GOOGLE: process.env.CLIEN_ID_GOOGLE || 'http://localhost:3000',
    URL_EXPLORER: process.env.URL_EXPLORER || 'http://localhost:3000',
    URL_EXPLORER_TXS: process.env.URL_EXPLORER_TXS || 'http://localhost:3000',
    ROUTER_EXPLORER_NEAR: process.env.ROUTER_EXPLORER_NEAR || 'http://localhost:3000',
    ROUTER_RPC: process.env.ROUTER_RPC || 'http://localhost:3000',
    VUE_APP_GLOBAL_LANG: process.env.VUE_APP_GLOBAL_LANG,
    VUE_APP_NETWORK: process.env.VUE_APP_NETWORK,
    VUE_APP_CONTRACT_ID: process.env.VUE_APP_CONTRACT_ID,
    VUE_APP_CONTRACT_NAME_USDT: process.env.VUE_APP_CONTRACT_NAME_USDT,
    VUE_COINGECKO_API_KEY: process.env.VUE_COINGECKO_API_KEY,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - wallet-p2p',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
      class: 'light',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/icon', href: 'favicon.ico' },
      // <-- icons-default -->
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      // <!-- fonts -->
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      //   <!-- league gothic -->
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=League+Gothic&display=swap' },
    ],
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
      },
      // {
      //   src: "https://code.jquery.com/jquery-3.5.1.min.js",
      //   body: true
      // },
    ],
  },

  google: {
    clientId: process.env.CLIEN_ID_GOOGLE,
    codeChallengeMethod: '',
    responseType: 'code',
    endpoints: {
      token: 'http://localhost:8000/wallet-p2p/login', // somm backend url to resolve your auth with google and give you the token back
      userInfo: 'http://localhost:8000/wallet-p2p/login' // the endpoint to get the user info after you recived the token 
    },
  },

  loading: {
    color: 'hsl(225 225% 225% / .5)',
    height: '2px',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/main/main.scss"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  components: [
    '~/components', // shortcut to { path: '~/components' }
    // { path: '~/components/sections/', prefix: 'sections' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // plugins
    '~/plugins/injects.js',
    '~/plugins/polyfills.js',
    '~/plugins/directives.js',
    '~/plugins/mixinsImport.js',
    '~/plugins/axios.js',
    '~/plugins/apexchart.js',
    '~/plugins/google-maps.js',
    '~/plugins/vue-debounce.js',
    '~/plugins/unlock-wallet.js',
    // services
    '~/services/utils',
    '~/services/near-api-config',
    '~/services/near-api',
    '~/services/wallet-selector-api',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    ['@nuxtjs/i18n'],
    '@nuxtjs/auth-next',
    'nuxt-clipboard2',
    'nuxt-graphql-client',
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8000',
      }
    }
  },

  graphqlClient: {
    endpoint: process.env.VUE_APP_GRAPH_ENDPOINT, // replace with your GraphQL endpoint
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js' },
      { code: 'es', iso: 'es-VE', file: 'es-VE.js' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-RU.js' },
      // Add other languages here...
    ],
    defaultLocale: process.env.VUE_APP_I18N_LOCALE || 'es',
    langDir: '~/lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      cookieAge: 365,
      cookieCrossOrigin: false,
      onlyOnRoot: true,  // recommended
    },
  },
  auth: {
    strategies: {
      google: {
        clientId: process.env.CLIEN_ID_GOOGLE
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: development ? 'http://localhost:3001/api' : 'https://domain/api',
  },

  // nuxt i18n documentation: https://i18n.nuxtjs.org
  /*
    1- function to switch language: switchLocalePath('en')
    2- function to push prefix routes: localePath('/')
    3- i18n data object: $i18n.locale  --> locale language
  */

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [
      '~/assets/styles/main/_fonts.scss',
      '~/assets/styles/main/_variables.scss',
      '~/assets/styles/main/_custom-mixins.scss',
    ],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  router: {
    // base: process.env.BASE_URL,
    base: development ? '/near-p2p/' : '/near-p2p/', //! commented
    // middleware: ['route-validator'],
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'layouts/error.vue'),
        name: 'ErrorPage',
        props: (route) => ({
          error: route.params.error || { statusCode: 404 }
        })
      });
    }
  },

  server: {
    host: 'localhost', // default: localhost,
    port: '8000', // default: 3000
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/near-p2p/',
    // publicPath: development ? '/wallet-p2p/' : '/', //! commented
    // TODO: read about this to fix it.
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     // global modules
    //     configureWebpack:{
    //       performance: {
    //         hints: false
    //       },
    //       optimization: {
    //         splitChunks: {
    //           minSize: 10000,
    //           maxSize: 500000,
    //         }
    //       }
    //     },
    //   }),
    // ],
    extend(config, ctx) {
      
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
      config.module.rules.push({
        exclude: /(node_modules)/,
      })
      config.node = {
        fs: 'empty'
      }
    },
  },

  // env declarations
  publicRuntimeConfig: {
    // myPublicVariable: process.env.PUBLIC_VARIABLE,
  },
  privateRuntimeConfig: {
    // myPrivateToken: process.env.PRIVATE_TOKEN
  }
}
