import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: ['@vueuse/nuxt', '@nuxtjs/strapi'],
  modules: ['@nuxtjs/tailwindcss'],
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
});
