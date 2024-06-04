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

  modules: ["@nuxt/ui", "@nuxtjs/color-mode", "@nuxtjs/sitemap", "@nuxtjs/seo"],

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },
})