
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/css/index.css',
    '~/static/font/iconfont.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/localStorage', ssr: false },
    { src: '~/plugins/axios', ssr: false },
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  proxy: {
    '/fzyq-web': {
      // target: 'http://172.17.102.27:6086',//冬冬
      target: 'http://supportcloud.360yhl.test',//沈威
      //  target: 'https://www.360aidata.com',//沈威
      //target: 'http://192.168.1.104:6086',//传奇
      changeOrigin: true,
      pathRewrite: {
        '^/fzyq-web': '/fzyq-web'
      }
    },
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
