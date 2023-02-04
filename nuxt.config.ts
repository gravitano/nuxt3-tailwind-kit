export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
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
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})
