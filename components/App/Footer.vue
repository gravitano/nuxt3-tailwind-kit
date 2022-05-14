<script setup lang="ts">
const route = useRoute();
const isHome = computed(() => route.path === '/');
</script>

<template>
  <footer
    class="px-4 sm:px-0"
    :class="isHome ? 'bg-blue-700 text-white' : 'mt-10 text-black'"
  >
    <div
      class="container py-4 mx-auto flex justify-between gap-2 items-center"
      :class="isHome ? '' : 'border-t'"
    >
      <NuxtLink to="/" class="font-semibold text-lg">
        <!-- <img
          loading="lazy"
          src="/logo.svg"
          alt="Logo"
          class="max-w-full h-10"
        /> -->
        Nuxt Tailwind Kit
      </NuxtLink>
      <div class="text-sm">
        Nuxt Tailwind Kit by
        <a href="https://github.com/gravitano" class="font-semibold">
          Warsono
        </a>
        . All rights reserved
      </div>
    </div>
  </footer>
</template>
