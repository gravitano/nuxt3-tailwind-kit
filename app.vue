<script setup lang="ts">
const { t } = useI18n()

useHead({
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('app_description'),
    },
  ],
})
</script>

<template>
  <Html lang="en" />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
