<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import MenuIcon from "./icons/MenuIcon.vue";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

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
      <div
        class="space-y-2 sm:space-y-0 dark:bg-gray-900"
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
      </div>

      <div class="flex items-center">
        <v-btn
          rounded
          size="xs"
          icon
          @click="toggleDark"
          text
          color="primary"
          class="!m-0 !p-0"
        >
          <moon-icon v-if="isDark" />
          <sun-icon v-else />
        </v-btn>
        <button class="appearance-none sm:hidden" @click="mainMenu = !mainMenu">
          <menu-icon />
          <span class="sr-only">Menu</span>
        </button>
      </div>
    </div>
  </div>
</template>
