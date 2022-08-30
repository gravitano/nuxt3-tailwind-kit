<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
  buttons?: {
    text: string;
    action?: string;
    props?: Record<string, any>;
  }[];
  theme?: string;
}>();
</script>

<template>
  <section
    id="hero"
    class="bg-skin-fill text-white sm:h-screen grid place-items-center -mt-1 sm:mt-0"
    :class="`hero-${theme}`"
  >
    <div
      class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20 py-6 sm:py-20"
    >
      <div class="w-full sm:w-6/12">
        <h1 class="text-4xl sm:text-6xl font-bold xl:leading-[4rem] text-skin-base">
          {{ title }}
        </h1>
        <p class="text-xl mt-4 mb-14 text-skin-muted">
          {{ description }}
        </p>
        <div v-if="buttons" class="space-x-4">
          <Button v-for="button in buttons" :key="button.text" v-bind="button.props">
            {{ button.text }}
          </Button>
        </div>
      </div>
      <div class="w-full sm:w-6/12 flex justify-end p-6 sm:p-0">
        <img loading="lazy" :src="image" alt="" class="w-auto max-w-full rounded-lg" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-default {
  --color-text-base: #191919;
  --color-text-muted: #363636;
  --color-fill: #ffffff;
}
</style>
