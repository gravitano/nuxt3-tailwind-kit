<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

type MenuPlacement = 'top' | 'bottom' | 'left' | 'right' | 'bottom-right'

const props = withDefaults(defineProps<{
  title: string
  to?: string
  items: {
    title: string
    to: string
  }[]
  placement?: MenuPlacement
}>(), {
  placement: 'bottom',
})

const placementClass: Record<MenuPlacement, string> = {
  'top': 'bottom-0',
  'bottom': '',
  'left': 'left-0',
  'right': 'right-0',
  'bottom-right': 'bottom-0 right-0',
}

const route = useRoute()
const isActive = props.to ? route.path === props.to : false
</script>

<template>
  <Popover class="relative">
    <slot name="activator">
      <PopoverButton
        class="text-sm font-semibold leading-6 text-gray-900"
        :class="{
          'text-primary-600': isActive,
        }"
      >
        {{ title }}
        <Icon name="heroicons:chevron-down-20-solid" />
      </PopoverButton>
    </slot>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        v-slot="{ close }"
        class="absolute mt-2 z-20 bg-white shadow-md p-1 w-56 rounded-md"
        :class="placementClass[placement]"
      >
        <div class="flex flex-col">
          <slot>
            <NuxtLink v-for="item in items" :key="item.title" :to="item.to" class="px-3 text-sm rounded py-2 block hover:bg-gray-100" href="/analytics" @click="close">
              {{ item.title }}
            </NuxtLink>
          </slot>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
