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
</script>

<template>
  <div class="py-4 bg-white border-b">
    <div class="container mx-auto flex justify-between gap-4">
      <nuxt-link to="/" class="font-semibold text-primary-500 mr-5">
        Nuxt Tailwind Kit
      </nuxt-link>
      <div class="space-x-3">
        <nuxt-link class="hover:text-primary-500" to="/">Home</nuxt-link>
        <nuxt-link class="hover:text-primary-500" to="/components">Components</nuxt-link>
      </div>
    </div>
  </div>
  <div class="container mx-auto xl:p-4 py-4 flex gap-4">
    <div class="w-full sm:w-2/12">
      <div v-for="(menu, i) in menus" :key="i" class="mb-5">
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
