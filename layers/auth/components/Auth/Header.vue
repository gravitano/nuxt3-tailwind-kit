<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8 space-y-2 text-center">
    <h1 class="text-2xl font-semibold">
      {{ title }}
    </h1>
    <p class="text-gray-500 text-sm">
      {{ subtitle }}
    </p>
  </div>
</template>
