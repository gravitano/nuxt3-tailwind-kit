<script setup lang="ts">
import type { RouteLocation } from 'vue-router'
import type { MenuPlacement } from './Menus.vue'

interface Props {
  to?: string | RouteLocation
  title?: string
  icon?: string
  shortcut?: string
  header?: string
  divider?: boolean
  children?: Props[]
  placement?: MenuPlacement
  onClick?: (close: () => void) => void
}

defineProps<Props>()

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <div v-if="divider" class="border-b my-1"></div>
  <component
      v-else
    :is="to ? NuxtLink : 'button'" :to="to"
    :type="to ? undefined : 'button'"
    class="flex items-center no-underline gap-2 text-left px-3 text-gray-600 text-sm rounded py-2 w-full hover:bg-gray-100"
  >
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
    <span class="flex-1">
      <slot>
        {{ title }}
      </slot>
    </span>
    <div v-if="shortcut" class="flex gap-1 items-center">
      <span class="text-gray-400">{{ shortcut }}</span>
    </div>
  </component>
</template>
