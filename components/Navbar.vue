<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const mainMenu = ref(false);

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="py-4 bg-white border-b dark:bg-gray-900 dark:border-b-gray-800 transition-all duration-300"
  >
    <div class="container mx-auto flex items-center justify-between gap-4 px-4 sm:px-0">
      <nuxt-link to="/" class="font-semibold text-primary-500 mr-5 dark:text-white">
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
        class="space-y-2 sm:space-y-0"
        :class="
          mainMenu
            ? 'block w-full fixed inset-x-0 px-4 shadow py-4 top-14 sm:top-0 bg-white z-5'
            : 'hidden sm:flex sm:flex-items-center sm:gap-3'
        "
      >
        <nuxt-link
          class="hover:text-primary-500 block sm:inline-flex sm:items-center dark:text-gray-300 dark:hover:text-primary-500"
          exact-active-class="dark:text-primary-500 text-primary-500 font-semibold"
          @click="mainMenu = false"
          to="/"
        >
          Home
        </nuxt-link>
        <nuxt-link
          class="hover:text-primary-500 block sm:inline-flex sm:items-center dark:text-gray-300 dark:hover:text-primary-500"
          exact-active-class="dark:text-primary-500 text-primary-500 font-semibold"
          @click="mainMenu = false"
          to="/components"
        >
          Components
        </nuxt-link>

        <v-btn
          rounded
          size="xs"
          icon
          @click="toggleDark"
          text
          color="primary"
          class="!m-0 !p-0"
        >
          <!-- moon -->
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>

          <!-- sun -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </v-btn>
      </div>
    </div>
  </div>
</template>
