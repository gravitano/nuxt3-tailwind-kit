# Nuxt 3 Tailwind Kit

Nuxt 3 + Tailwind Starter Kit.

## Features

- [Nuxt 3](https://v3.nuxtjs.org/) (RC.11)
- [Nuxt Content v2](https://content.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- State management with [Pinia](https://pinia.vuejs.org/)
- Easy form validation with [vee-validate](https://vee-validate.logaretm.com/v4/)
- Custom authentication store via [`useAuthStore`](./stores/auth.ts)
- Internalization via [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)

## Try it Now

### Stackblitz

- Try on [stackblitz](https://stackblitz.com/github/gravitano/nuxt3-tailwind-kit/tree/main)

### Online Demo

- Try [online demo](https://nuxt3-tailwind-kit.vercel.app/)

### GitHub Template

[Create a repo from this template on GitHub.](https://github.com/gravitano/nuxt3-tailwind-kit/generate)

### Local

If you prefer to do it manually with the cleaner git history

```bash
npx nuxi init -t gravitano/nuxt3-tailwind-kit my-nuxt-app
cd my-nuxt-app
yarn
yarn dev
```

## Development

We recommend to look at the [documentation](https://v3.nuxtjs.org).

Make sure to install the dependencies

```bash
yarn install
```

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
