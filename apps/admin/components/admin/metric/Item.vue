<script lang="ts" setup>
defineProps<{
  color: string
  icon: any
  count: string | number
  text: string
}>()
</script>

<template>
  <div
    class="flex gap-4 border border-gray-200 rounded-xl items-center px-4 py-3 bg-white"
  >
    <div
      class="rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0"
      :class="color"
    >
      <component :is="icon" class="w-5 h-5" />
    </div>
    <div>
      <h3 class="font-semibold text-xl truncate">
        {{ count }}
      </h3>
      <h4 class="text-gray-600">
        {{ text }}
      </h4>
    </div>
  </div>
</template>
