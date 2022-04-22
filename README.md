# Nuxt 3 Tailwind Kit

> 🚧 Work in progress

## Major Dependencies

- [Nuxt 3](https://v3.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [VueUse](https://vueuse.org/)
- [vee-validate](https://vee-validate.logaretm.com/v4/)
- [@nuxtjs/strapi](https://strapi.nuxtjs.org/)
- [markdown-it](https://github.com/markdown-it/markdown-it)

## Components

| Component                                                                    | Description                          | Status |
| :--------------------------------------------------------------------------- | :----------------------------------- | :----: |
| [Button](https://nuxt3-tailwind-kit.vercel.app/docs/components/buttons)      | Card Component                       |   ✅   |
| [Card](https://nuxt3-tailwind-kit.vercel.app/docs/components/cards)          | Card Component                       |   ✅   |
| [Collapsible](https://nuxt3-tailwind-kit.vercel.app/docs/components/buttons) | Wrapper for Headless UI's Disclosure |   ✅   |
| [Dropdown](https://nuxt3-tailwind-kit.vercel.app/docs/components/buttons)    | Dropdown Component                   |   ✅   |
| [Select](https://nuxt3-tailwind-kit.vercel.app/docs/components/buttons)      | Select Component                     |   ✅   |
| Form                                                                         | Form Component                       |   ✅   |
| Header                                                                       | Header Component                     |   ✅   |
| Icons                                                                        | Icons Component                      |   ✅   |
| Stats                                                                        | Statistic Component                  |   ✅   |

## Pages

| Path                                                                                  | Description         | Status |
| :------------------------------------------------------------------------------------ | :------------------ | :----: |
| [`/`](https://nuxt3-tailwind-kit.vercel.app/)                                         | Homepage / Dashbard |   🚧   |
| [`/auth/login`](https://nuxt3-tailwind-kit.vercel.app/login)                          | Login               |   ✅   |
| [`/auth/register`](https://nuxt3-tailwind-kit.vercel.app/auth/register)               | Register            |   ✅   |
| [`/auth/forgot-password`](https://nuxt3-tailwind-kit.vercel.app/auth/forgot-password) | Forgot Password     |   ✅   |
| [`/auth/reset-password`](https://nuxt3-tailwind-kit.vercel.app/auth/reset-password)   | Reset Password      |   ✅   |

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
