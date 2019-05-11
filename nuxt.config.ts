import NuxtConfiguration from '@nuxt/config'
const StylelintPlugin = require('stylelint-webpack-plugin')
require('dotenv').config()
// const pkg = require('./package')

const nuxtConfig: NuxtConfiguration = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: "Minoru's Portfolio",
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: "%s - Minoru's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Minoru Takeuchi's Portfolio Website"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Minoru's Portfolio"
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://minoru.dev' },
      { hid: 'og:title', property: 'og:title', content: "Minoru's Portfolio" },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Minoru Takeuchi's Portfolio Website"
      }
      // { hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before   mounting the App
   */
  plugins: ['~/plugins/fontawesome.ts'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        if (!config.plugins) return
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
    },

    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  },

  styleResources: {
    scss: ['~/assets/sass/variable.scss']
  },

  env: {
    feedUrl: process.env.FEED_URL!
  }
}

export default nuxtConfig
