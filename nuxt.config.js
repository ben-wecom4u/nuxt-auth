module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  plugins: [
    '~plugins/vue-validate.js',
  ],

  css: [
    '~/assets/scss/index.scss'
  ],

  bootstrapVue: {
    bootstrapCSS: true, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },

  axios: {
    baseURL: 'http://localhost:8000/api',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'login', method: 'post', propertyName: 'access_token'},
          user: {url: 'user', method: 'get', propertyName: 'user'},
          logout: false
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

