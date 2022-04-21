<script setup lang="ts">
useHead({
  title: 'Nuxt 3 UnoCSS',
});

const sidebar = useSidebar();
</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <Sidebar v-model="sidebar" />

    <div class="w-full flex-grow">
      <AppHeader @menu:click="sidebar = true" />

      <!-- main content -->
      <div class="px-6 py-6">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
  color: #333;
}
</style>
