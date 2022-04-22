<script setup lang="ts">
type Props = {
  title: string;
  subtitle?: string;
};

defineProps<Props>();
</script>

<template>
  <div class="mb-5 space-y-1">
    <h1 class="font-bold text-2xl text-gray-900 dark:text-gray-200">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-gray-700 text-base dark:text-gray-400">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped></style>
