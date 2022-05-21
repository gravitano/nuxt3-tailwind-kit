<script setup lang="ts">
useHead({
  title: "Nuxt Tailwind Kit",
});

const route = useRoute();
const isFullWidth = computed(() => route.name === "index" || route.meta.fullWidth);
</script>

<template>
  <div>
    <AppHeader />

    <div :class="isFullWidth ? '' : 'container mx-auto px-4 sm:px-0 py-4'">
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
