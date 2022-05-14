<script setup lang="ts">
useHead({
  title: 'Nuxt 3 Tailwind',
});

const sidebar = useSidebar();
</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <Sidebar v-model="sidebar" />
    <!-- <NavDrawer /> -->

    <div class="w-full flex-grow">
      <Header @menu:click="sidebar = true" />

      <!-- main content -->
      <div class="px-6 py-6">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>

<style></style>
