<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: t("app_name"),
});

const sidebar = useSidebar();
</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <DashboardSidebar v-model="sidebar" />
    <!-- <NavDrawer /> -->

    <div class="w-full flex-grow">
      <DashboardHeader @menu:click="sidebar = true" />

      <!-- main content -->
      <div class="px-6 py-6">
        <NuxtPage />
      </div>
    </div>
  </main>
</template>

<style></style>
