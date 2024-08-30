<script setup lang="ts">
defineProps<{
  title: string
  description: string
  button: {
    text: string
    action: string
  }
}>()
</script>

<template>
  <section id="about" class="bg-blue-100 py-6 sm:py-20 px-4 sm:px-0">
    <div class="container mx-auto lg:text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-blue-600">
          {{ title }}
        </h2>
        <p class="mt-4 text-gray-600 leading-6">
          {{ description }}
        </p>

        <div class="mt-10 mb-4">
          <a
            :href="button.action"
            class="px-6 py-4 cursor-pointer rounded-lg transition duration-300 border text-lg bg-blue-600 border-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
