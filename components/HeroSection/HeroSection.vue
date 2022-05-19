<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  button: {
    text: string;
    action: string;
  };
}>();
</script>

<template>
  <section
    id="hero"
    class="bg-blue-600 text-white sm:h-screen grid place-items-center -mt-1 sm:mt-0"
  >
    <div
      class="container mx-auto px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20 py-6 sm:py-20"
    >
      <div class="w-full sm:w-6/12">
        <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem]">
          {{ title }}
        </h1>
        <p class="text-xl mt-4 mb-14 text-blue-200">
          {{ description }}
        </p>
        <div class="space-x-4">
          <a
            :href="button.action"
            class="px-6 py-4 rounded-lg transition duration-300 border text-lg bg-white border-white text-blue-600 font-semibold hover:bg-blue-100"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
      <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
        <img
          loading="lazy"
          :src="image"
          alt=""
          class="w-auto max-w-full rounded-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
