<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

const route = useRoute()
const isFullWidth = computed(() => route.name === 'index' || route.meta.fullWidth)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <div class="flex-1" :class="isFullWidth ? '' : 'container mx-auto px-4 sm:px-0 py-4'">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
