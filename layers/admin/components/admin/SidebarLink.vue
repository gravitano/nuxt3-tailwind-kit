<script lang="ts" setup>
const props
  = defineProps<{
    icon?: any
    appendIcon?: any
    text?: string
    child?: boolean
    parent?: boolean
  }>()
</script>

<template>
  <nuxt-link
    class="
      px-4
      py-2
      transition
      duration-300
      hover:bg-indigo-500
      hover:text-white
      rounded
      flex
      gap-2
      items-center
      w-full
    "
  >
    <div v-if="child" class="w-5" />
    <Icon v-else-if="icon" class="w-5 h-5" :name="icon" />
    <span class="flex-grow">
      <slot>{{ text }}</slot>
    </span>
    <Icon v-if="parent" name="ri:arrow-right-s-line" class="w-5 h-5" />
    <div v-else-if="appendIcon" class="w-5 h-5" :class="appendIcon" />
  </nuxt-link>
</template>
