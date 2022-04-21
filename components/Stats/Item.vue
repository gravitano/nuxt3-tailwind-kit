<script lang="ts" setup>
import type { Component } from 'vue';

defineProps<{
  color: string | Component;
  icon: string;
  count: string | number;
  text: string;
}>();
</script>

<template>
  <div
    class="flex gap-4 border border-gray-200 rounded-xl items-center px-4 py-3"
  >
    <div
      class="rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0"
      :class="color"
    >
      <component class="w-5 h-5" :is="icon" />
    </div>
    <div>
      <h3 class="font-semibold text-xl truncate">
        {{ count }}
      </h3>
      <h4 class="text-gray-600">
        {{ text }}
      </h4>
    </div>
  </div>
</template>

<style scoped></style>
