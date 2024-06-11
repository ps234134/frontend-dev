// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'EasyExercises is a platform designed to help individuals around the world reach their fitness goals. We provide detailed exercise instructions, customizable workout plans, and a supportive community to keep you motivated.' },
        { hid: 'keywords', name: 'keywords', content: 'fitness, exercise, workout, health, wellness, community, motivation' },
      ],
      htmlAttrs: { lang: 'en' },
    }
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
    "@nuxt/image",
  ],

  // pwa: {
  //   manifest: {
  //     name: 'EasyExercises',
  //     short_name: 'EasyExercises',
  //     description: 'EasyExercises is a platform designed to help individuals around the world reach their fitness goals. We provide detailed exercise instructions, customizable workout plans, and a supportive community to keep you motivated.',
  //     theme_color: '#991b1b',
  //     icons: [
  //       {
  //         src: 'icons/icon-192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
        
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globDirectory: 'C:/Users/tutai/OneDrive/School/Summa/SD3A/Frontend-dev/eindopdr/exercises/.nuxt/dev-sw-dist',
  //     globIgnores: [
  //       '**/node_modules/**/*',
  //       'sw.js',
  //       'workbox-*.js',
  //     ],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },


  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
})