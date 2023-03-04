<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="mb-5 space-y-1 py-10">
    <h1 class="font-bold text-2xl text-gray-800 dark:text-gray-200">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-gray-600 text-lg dark:text-gray-400">
      {{ subtitle }}
    </p>
  </div>
</template>
