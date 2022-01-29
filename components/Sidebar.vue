<script setup lang="ts">
import { ref } from "vue";

const menus = ref([
  {
    text: "Getting Started",
    children: [
      {
        text: "Installation",
        to: "/getting-started/installation",
      },
      {
        text: "Core Concepts",
        to: "/getting-started/installation",
      },
    ],
  },
  {
    text: "Components",
    children: [
      {
        text: "Buttons",
        to: "/components/buttons",
      },
      {
        text: "Alerts",
        to: "/components/alerts",
      },
    ],
  },
]);

const sideMenu = ref(false);
</script>

<template>
  <button class="appearance-none sm:hidden" @click="sideMenu = !sideMenu">
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
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
    <span class="sr-only">Menu</span>
  </button>
  <div
    v-for="(menu, i) in menus"
    :key="i"
    class="mb-5"
    :class="sideMenu ? 'block' : 'hidden sm:block'"
  >
    <h3 class="text-xs text-gray-500 uppercase mb-2">
      {{ menu.text }}
    </h3>
    <nuxt-link
      v-for="(child, j) in menu.children"
      :key="j"
      :to="child.to"
      class="px-4 transition duration-300 hover:text-primary-500 text-gray-800 dark:text-gray-400 block py-1 text-sm border-l dark:border-gray-800 hover:border-primary-500"
      exact-active-class="font-semibold text-primary-500 border-primary-500 dark:!border-primary-500"
    >
      {{ child.text }}
    </nuxt-link>
  </div>
</template>

<style scoped></style>
