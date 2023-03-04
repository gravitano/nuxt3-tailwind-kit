<script setup lang="ts">
//
</script>

<template>
  <div class="flex flex-col lg:min-h-screen">
    <LandingHeader hide-hero />
    <div class="flex-1 flex-col lg:flex-row container mx-auto z-0 flex gap-6">
      <DocsSidebar />
      <div class="flex-1 py-4 lg:py-8 prose px-4 lg:px-0">
        <slot />
      </div>
    </div>
    <LandingFooter />
  </div>
</template>
