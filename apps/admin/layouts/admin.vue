<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

const sidebar = useAdminSidebar()
T
const fun = (x: number) => {
  if (x === 1)
    return 'a'
  if (x === 2)
    return 'b'
  if (x === 3)
    return 'c'
  if (x === 4)
    return 'd'
  if (x === 5)
    return 'e'
  if (x === 6)
    return 'f'
  if (x === 7)
    return 'g'
  if (x === 8)
    return 'h'
  if (x === 9)
    return 'i'
  return 'z'
}
</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <AdminSidebar v-model="sidebar" />

    <div class="w-full flex-grow">
      <AdminHeader @menu:click="sidebar = true" />

      <!-- main content -->
      <div class="px-6 py-6">
        <slot />
      </div>
    </div>
  </main>
</template>
