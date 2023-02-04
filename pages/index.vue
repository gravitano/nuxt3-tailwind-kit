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
    <HomeHeader />

    <HomeFeatureTwoColumn />

    <HomeFeatureGrid />

    <HomeCta />
  </div>
</template>
