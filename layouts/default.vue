<script setup lang="ts">
import { ref, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const { modelValue } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

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

const mainMenu = ref(false);
const sideMenu = ref(false);
</script>

<template>
  <div class="py-4 bg-white border-b dark:bg-gray-900">
    <div class="container mx-auto flex justify-between gap-4 px-4 sm:px-0">
      <nuxt-link to="/" class="font-semibold text-primary-500 mr-5">
        Nuxt Tailwind Kit
      </nuxt-link>
      <button class="appearance-none" @click="mainMenu = !mainMenu">
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
  <div class="container mx-auto xl:p-4 py-4 flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
    <div class="w-full sm:w-2/12">
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
        <h3 class="text-xs text-gray-500 uppercase mb-2">{{ menu.text }}</h3>
        <nuxt-link
          v-for="(child, j) in menu.children"
          :key="j"
          :to="child.to"
          class="px-4 hover:text-primary-500 text-gray-800 block py-1 text-sm border-l hover:border-primary-500 hover:font-semibold"
          exact-active-class="font-semibold text-primary-500 border-primary-500"
        >
          {{ child.text }}
        </nuxt-link>
      </div>
    </div>
    <div class="w-full sm:w-9/12">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
