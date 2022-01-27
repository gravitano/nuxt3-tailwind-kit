<script setup>
import { ref } from "vue";

const mainMenu = ref(false);
</script>

<template>
  <div class="py-4 bg-white border-b dark:bg-gray-900">
    <div class="container mx-auto flex justify-between gap-4 px-4 sm:px-0">
      <nuxt-link to="/" class="font-semibold text-primary-500 mr-5">
        Nuxt Tailwind Kit
      </nuxt-link>
      <button class="appearance-none sm:hidden" @click="mainMenu = !mainMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span class="sr-only">Menu</span>
      </button>
      <div
        class="sm:space-x-3 space-y-2"
        :class="
          mainMenu
            ? 'block w-full fixed inset-x-0 px-4 shadow py-4 top-14 bg-white z-5'
            : 'hidden sm:block'
        "
      >
        <nuxt-link
          class="hover:text-primary-500 block sm:inline"
          @click="mainMenu = false"
          to="/"
        >
          Home
        </nuxt-link>
        <nuxt-link
          class="hover:text-primary-500 block sm:inline"
          @click="mainMenu = false"
          to="/components"
        >
          Components
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
