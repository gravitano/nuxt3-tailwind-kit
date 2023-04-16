export default defineNuxtConfig({
  extends: [
    './ui',
    './apps/landing',
    './apps/store',
    './apps/blog',
    './apps/admin',
    './apps/docs',
    './apps/auth',
  ],
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
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
  },
})
