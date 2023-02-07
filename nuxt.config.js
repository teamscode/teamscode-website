import config from './configs'

const { gaId } = config.analytics

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - TeamsCode',
    title: 'TeamsCode',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/theme.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/trim.js' },
    { src: '~/filters/placeholder.js' },
    { src: '~/filters/formatDate.js' },
    { src: '~/filters/ordinal.js' },
    { src: '~/plugins/chart.js', mode: 'client' }
  ],

  'google-gtag': {
    id: gaId,
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    'nuxt-compress',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    '@nuxt/content'
  ],

  content: {
    // Only search in title and description
    fullTextSearchFields: () => ['title', 'description', 'place', 'date', 'participants', 'status', 'author', 'slug']
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '/images/'
    },
    {
      Sitemap: 'https://www.teamscode.org/sitemap.xml'
    }
  ],

  googleFonts: {
    families: {
      Roboto: [100, 200, 300],
      Barlow: [400, 700, 900]
    },
    download: true,
    display: 'swap'
  },

  vuetify: {
    customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
    optionsPath: '~/configs/vuetify.js',
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: false
    },
    extractCSS: true
  },

  gtm: {
    id: 'GTM-KZSX9DH',
    pageTracking: true,
    enabled: true,
    scriptURL: 'https://www.googletagmanager.com/gtag/js'
  },

  sitemap: {
    hostname: 'https://www.teamscode.org',
    routes: [
      {
        url: '/contests',
        changefreq: 'daily'
      },
      {
        url: '/blog',
        changefreq: 'daily'
      }
    ],
    trailingSlash: true
  }
}
