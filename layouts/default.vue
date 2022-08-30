<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: t("app_name"),
});

const route = useRoute();
const isFullWidth = computed(() => route.name === "index" || route.meta.fullWidth);
</script>

<template>
  <div>
    <AppHeader />

    <div :class="isFullWidth ? '' : 'container mx-auto px-4 sm:px-0 py-4'">
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>

