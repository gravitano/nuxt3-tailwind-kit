import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/strapi',
    [
      'unplugin-icons/nuxt',
      {
        /* options */
      },
    ],
    ['@pinia/nuxt', { disableVuex: true }],
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  strapi: {
    url: process.env.STRAPI_URL || 'https://strapi.warsono.id',
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
});
