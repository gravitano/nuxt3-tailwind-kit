<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bordered?: boolean
  }>(),
  {
    bordered: false,
  },
)
</script>

<template>
  <div class="px-4 py-3 text-gray-600">
    <slot />
  </div>
</template>
