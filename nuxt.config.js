const pkg = require('./package')

module.exports = {
    server: {
        host: '0.0.0.0', // default: localhost
    },
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Wasatch Forge',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A blacksmithing shop in Salt Lake City, Utah, that offers lessons, a workspace, and hand-forged products for anyone interested in the craft.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Barlow|Source+Sans+Pro|Alegreya:500' }
        ],
        bodyAttrs: {
            class: 'init'
        }
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/styles.scss'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/global_listeners.js'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'
    ],

    router: {
        middleware: 'addInitAttribute'
    },

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
        extend (config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options : {
                        fix : true
                    }
                })
            }
        }
    }
}
