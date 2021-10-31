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

const value = ref("");
</script>

<template>
  <div class="py-4 bg-indigo-500">
    <div class="container mx-auto space-x-3 text-white">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </div>
  </div>
  <div class="container mx-auto xl:p-4 py-4">
    <slot />
  </div>
</template>

<style scoped>
</style>