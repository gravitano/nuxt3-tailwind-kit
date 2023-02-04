<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <HomeHero />

    <HomeFeatureTwoColumn />

    <HomeFeatureGrid />

    <HomeCta />
  </div>
</template>
