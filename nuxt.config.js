const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: 'universal',
  head: {
    title: 'Vintage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { name: 'HandheldFriendly', content: 'true' },
      { hid: 'description', name: 'description', content: 'Vintage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/users/authenticate', method: 'post', propertyName: 'token' },
          user: { url: '/users/user', method: 'get', propertyName: false },
          logout: false
        }
      }
    },
    redirect: {
      login: '/user/login',
      logout: '/',
      callback: '/',
      home: '/'
    }
  },
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'mdi'
    }
  },
  plugins: ['~/plugins/vuetify.js'],
  css: ['~assets/style/main.scss'],
  // loading: '~/components/Loading.vue',
  loading: { color: '#3B8070' },
  build: {
    transpile: [/^vuetify/],
    extractCss: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
