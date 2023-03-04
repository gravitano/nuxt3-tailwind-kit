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
    <LandingFeatureTwoColumn />

    <LandingFeatureGrid />

    <LandingCta />
  </div>
</template>
