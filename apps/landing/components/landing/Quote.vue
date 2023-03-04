<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="bg-white py-6 px-4 sm:px-0 sm:py-20">
    <div class="container mx-auto lg:text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-blue-600">
          {{ title }}
        </h2>
        <p class="mt-4 text-gray-600 leading-6">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
