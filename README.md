# Nuxt 3 Tailwind Kit

Nuxt 3 + Tailwind Starter Kit.

## Features

- [Nuxt 3](https://v3.nuxtjs.org/)
- [Nuxt Content v2](https://content.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Icon](https://github.com/nuxt-modules/icon)
- State management with [Pinia](https://pinia.vuejs.org/)
- Easy form validation with [vee-validate](https://vee-validate.logaretm.com/v4/)
- Custom authentication store via [`useAuthStore`](./stores/auth.ts)
- Internalization via [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/)
- Modular with [Nuxt Layer](https://nuxt.com/docs/getting-started/layers)

## Directory Structure

```bash
.
├── apps              # Nuxt Layer
│   └── admin         # Admin Panel
│   └── auth          # Authentication
│   └── blog          # Blog
│   └── docs          # Documentation
│   └── landing       # Landing Page
│   └── store         # Store
├── components        # Global Components
├── content           # Nuxt Content
├── layouts           # Layouts
├── plugins           # Plugins
├── stores            # Stores
├── ui                # UI Component Library
├── app.config.ts     # Application Config
```

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
npx nuxi init -t gh:gravitano/nuxt3-tailwind-kit my-nuxt-app
cd my-nuxt-app
pnpm
pnpm dev
```

## Development

We recommend to look at the [documentation](https://v3.nuxtjs.org).

Make sure to install the dependencies

```bash
pnpm install
```

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
