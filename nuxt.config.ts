// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  site: {
    url:'http://localhost:3000'
  },
  css: [
    '~/assets/css/main.css',
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
        { hid: 'description', name: 'description', content: 'EasyExercises is a comprehensive fitness platform meticulously designed to assist individuals across the globe in achieving their unique fitness goals. Our mission is to make fitness accessible and achievable for everyone, regardless of their starting point or fitness level. We provide detailed, easy-to-follow exercise instructions that cater to a wide range of fitness levels and goals. Whether you are a beginner just starting your fitness journey, or an experienced athlete looking to push your limits, our extensive library of exercises can help you get there.'},
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
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "@vite-pwa/nuxt"
  ],

  pwa: {
    manifest: {
      name: 'EasyExercises',
      short_name: 'EasyExercises',
      description: 'EasyExercises is a comprehensive fitness platform meticulously designed to assist individuals across the globe in achieving their unique fitness goals. Our mission is to make fitness accessible and achievable for everyone, regardless of their starting point or fitness level. We provide detailed, easy-to-follow exercise instructions that cater to a wide range of fitness levels and goals. Whether you are a beginner just starting your fitness journey, or an experienced athlete looking to push your limits, our extensive library of exercises can help you get there.',
      theme_color: '#991b1b',
      background_color:'#ffffff',
      lang: 'en',
      icons: [
        {
          src: 'icons/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
    devOptions: {
       enabled: true,
       type: 'module',
    },
  }, 

  fontawesome:{
    icons: {
      solid: ['briefcase', 'bullhorn', 'bullseye', 'chart-line', 'check-circle', 'user'],
    }
  },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
})