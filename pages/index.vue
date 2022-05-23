<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { data } = await useFetch("/api/homepage", {});
const { t } = useI18n();
console.log(t("app_name"));
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
