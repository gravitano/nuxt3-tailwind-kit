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
    <HomeFeatureTwoColumn />

    <HomeFeatureGrid />

    <HomeCta />
  </div>
</template>
