<script setup lang="ts">
const { data } = await useFetch("/api/homepage", {});
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
