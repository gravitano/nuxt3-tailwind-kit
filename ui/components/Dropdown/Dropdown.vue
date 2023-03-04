<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import type { DropdownItemProps } from './types'
import DropdownItem from './DropdownItem.vue'

withDefaults(
  defineProps<{
    modelValue?: boolean
    btnProps?: Record<string, any>
    label?: string
    right?: boolean
    items?: DropdownItemProps[]
  }>(),
  {
    modelValue: false,
    btnProps: () => ({
      variant: 'secondary',
    }),
    label: 'Options',
    right: false,
    items: () => [],
  },
)
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <slot name="activator" :btn-props="btnProps" :label="label">
        <MenuButton as="button" class="text-sm" v-bind="btnProps">
          {{ label }}
          <Icon
            name="heroicons:chevron-down"
            class="w-4 h-4 inline"
            aria-hidden="true"
          />
        </MenuButton>
      </slot>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
          absolute
          z-10
          p-1
          w-56
          mt-2
          origin-top-right
          bg-white
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        :class="right ? 'right-0' : 'left-0'"
      >
        <slot>
          <DropdownItem v-for="item in items" :key="item.text" v-bind="item" />
        </slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
