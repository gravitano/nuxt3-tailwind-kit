<script setup lang="ts">
const colors = [
  "default",
  "primary",
  "secondary",
  "info",
  "warning",
  "success",
  "error",
  "dark",
];

const variants = ["", "rounded", "outlined", "text", "block", "underline"];
</script>

<template>
  <h1 class="font-bold text-3xl mb-5">Hello World!</h1>

  <div class="space-y-6">
    <div v-for="variant in variants" :key="variant" class="space-x-2 space-y-2">
      <h2 class="font-bold mb-2">{{ variant || "default" }}</h2>
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        v-bind="
          variant ? { [variant]: true, text: variant === 'underline' } : {}
        "
      >
        {{ color }}
      </v-btn>
    </div>

    <div class="space-x-2 space-y-2">
      <h2 class="font-bold mb-2">Anchor</h2>
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        text
        underline
        href="https://google.com"
      >
        {{ color }}
      </v-btn>
    </div>

    <div class="space-x-2 space-y-2">
      <h2 class="font-bold mb-2">Nuxt Link</h2>
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        text
        underline
        :to="{ path: color }"
      >
        {{ color }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
</style>