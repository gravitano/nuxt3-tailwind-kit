import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/strapi',
    ['unplugin-icons/nuxt', {}],
    '@intlify/nuxt3',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'https://bapi.warsono.id',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },
  vite: {
    optimizeDeps: {
      include: ['markdown-it'],
    },
  },
  // css: ['~/windplus/styles/main.css'],
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      // ...
    },
  },
});
