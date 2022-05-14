<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const isOpen = ref(false);

function onResize() {
  isOpen.value = breakpoints.greater('sm').value;
}

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <div>
    <header class="bg-blue-600 text-white py-3 sm:py-5">
      <div
        class="container mx-auto pl-4 pr-2 sm:px-0 flex flex-row items-center gap-4 justify-between"
      >
        <NuxtLink to="/" class="font-bold text-white text-2xl">
          <!-- <img
          loading="lazy"
          src="/logo.svg"
          alt="Logo"
          class="max-w-full h-10"
        /> -->
          Nuxt Tailwind Kit
        </NuxtLink>
        <button
          class="appearance-none px-2 py-2 rounded sm:hidden"
          type="button"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          :class="
            isOpen
              ? 'fixed top-16 shadow sm:shadow-none left-4 right-4 rounded-lg overflow-hidden bg-white sm:bg-transparent py-2'
              : 'hidden sm:flex sm:w-6/12'
          "
        >
          <nav
            class="flex flex-col sm:relative w-full items-start sm:flex-row sm:justify-end sm:gap-1 sm:items-center"
          >
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-full w-full sm:w-auto text-gray-800 sm:text-white transition duration-300 font-medium hover:bg-white hover:text-blue-600"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="px-4 py-2 rounded-full w-full sm:w-auto transition duration-300 font-medium bg-white text-blue-600 sm:hover:bg-primary sm:hover:text-blue-600"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/dashboard"
              class="px-4 py-2 rounded-full w-full sm:w-auto text-gray-800 sm:text-white transition duration-300 font-medium hover:bg-white hover:text-blue-600"
            >
              Dashboard
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 sm:px-0 py-4">
      <NuxtPage />
    </div>

    <footer class="mt-10 text-black px-4 sm:px-0">
      <div
        class="container border-t py-4 mx-auto flex justify-between gap-2 items-center"
      >
        <NuxtLink to="/" class="font-semibold text-gray-800 text-lg">
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
  </div>
</template>

<style scoped></style>
