<script setup lang="ts">
useHead({
  title: 'Nuxt Tailwind Kit',
});
</script>

<template>
  <div>
    <AppHeader />

    <div
      :class="
        $route.name === 'index' ? '' : 'container mx-auto px-4 sm:px-0 py-4'
      "
    >
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>

<style scoped></style>
