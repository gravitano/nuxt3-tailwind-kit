<script setup lang="ts">
definePageMeta({
  fullWidth: true,
});

const { data } = await useFetch('/api/home', {});
</script>

<template>
  <div>
    <HeroSection v-bind="data.hero" />

    <HomeAbout v-bind="data.about" />

    <SectionHeader v-bind="data.feature" id="feature" />

    <HomeFeatures :features="data.features" />

    <HomeQuote v-bind="data.quote" />

    <ContactForm v-bind="data.contact" />
  </div>
</template>
