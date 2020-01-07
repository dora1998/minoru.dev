import { Configuration } from '@nuxt/types'
const StylelintPlugin = require('stylelint-webpack-plugin')
require('dotenv').config()
// const pkg = require('./package')

const nuxtConfig: Configuration = {
  mode: 'spa',
  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Headers of the page
   */
  head: {
    title: '',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': 'ca-pub-1234567890123456',
        async: true
      }
    ]
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
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit'
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
          grid: 'autoplace'
        }
      }
    }
  },

  styleResources: {
    scss: ['~/assets/sass/variable.scss', '~/assets/sass/mixin.scss']
  },

  env: {
    FEED_URL: process.env.FEED_URL!,
    CTF_WORK_TYPE_ID: process.env.CTF_WORK_TYPE_ID!,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID!,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN!
  },

  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: []
  }
}

export default nuxtConfig
