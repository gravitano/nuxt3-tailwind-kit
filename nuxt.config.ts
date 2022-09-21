export default defineNuxtConfig({
  buildModules: ['@vueuse/nuxt', '@nuxtjs/strapi'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'https://bapi.warsono.id',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          app_name: 'Nuxt Tailwind Kit',
          app_description:
            'Quick Boilerplate built on top of Nuxt 3 and Tailwind CSS',
          menu_home: 'Home',
          menu_store: 'Store',
          menu_blog: 'Blog',
          menu_dashboard: 'Dashboard',
        },
        id: {
          app_name: 'Nuxt Tailwind Kit',
          app_description:
            'Boilerplate cepat yang dibangun dari Nuxt 3 and Tailwind CSS',
          menu_home: 'Beranda',
          menu_store: 'Toko',
          menu_blog: 'Blog',
          menu_dashboard: 'Dasbor',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
});
