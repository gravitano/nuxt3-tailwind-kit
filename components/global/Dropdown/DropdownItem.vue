<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    text?: string
    to?: string
    href?: string
    icon?: string | number
    iconClass?: string
    newTab?: boolean
    divider?: boolean
  }>(),
  {
    iconClass: 'w-5 h-5',
  },
)

const computedComponent = computed(() => {
  if (props.href)
    return 'a'

  return props.to ? resolveComponent('NuxtLink') : 'button'
})

const toProps = computed(() => {
  return props.to ? { to: props.to } : {}
})

const hrefProps = computed(() => {
  return props.href ? { href: props.href } : {}
})
</script>

<template>
  <MenuItem v-slot="{ active }">
    <div v-if="divider" class="border-b my-1 -mx-1" />
    <component
      :is="computedComponent"
      v-else
      :target="href && newTab ? '_blank' : undefined"
      :rel="href && newTab ? 'noopener' : null"
      class="group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm" :class="[
        active ? 'bg-gray-100' : 'text-gray-900',
      ]"
      v-bind="{ ...hrefProps, ...toProps, ...$attrs }"
    >
      <slot name="icon">
        <Icon v-if="icon" :name="icon" :class="iconClass" />
      </slot>
      <slot>{{ text }}</slot>
    </component>
  </MenuItem>
</template>
