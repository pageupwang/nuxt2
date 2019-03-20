const pkg = require('./package')

module.exports = {
  mode: 'universal',
  
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
    '~/assets/css/pc-base.css',
    'swiper/dist/idangerous.swiper.css'
  ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/Swiper.js', ssr: false },
    // {src:'@/plugins/axios.js',ssr: true},
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  proxy: {
    '/rest-web':
      {
        target: 'http://192.168.1.186:8086', // api主机
        changeOrigin: true,
        pathRewrite: {
          '^/rest-web': '/rest-web'
        }
      }
  },
  /*
  ** Nuxt.js modules
  */
  // proxyTable: [
  //   '/rest-web',
  //   {
  //     target: 'http://192.168.1.129:8086', // api主机
  //     ws: true,
  //     pathRewrite: { '^/rest-web': '/rest-web' }
  //   }
  // ],
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL :`http://192.168.1.186:8086`
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    
    }
  }
}
