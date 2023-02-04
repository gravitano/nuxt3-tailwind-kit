<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    bordered?: boolean
  }>(),
  {
    bordered: false,
  },
)
</script>

<template>
  <h3 class="font-semibold text-lg text-gray-700 px-4 py-3 border-b">
    <slot>
      {{ title }}
    </slot>
  </h3>
</template>
