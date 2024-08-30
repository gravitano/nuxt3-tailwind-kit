<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import MenusItem from './MenusItem.vue'

export type MenuPlacement = 'top' | 'bottom' | 'left' | 'right' | 'bottom-right' | 'right-child'

type MenuItem = InstanceType<typeof MenusItem>['$props']

const props = withDefaults(defineProps<{
  title?: string
  to?: MenuItem['to']
  items?: MenuItem[]
  placement?: MenuPlacement
  isChild?: boolean
}>(), {
  placement: 'bottom',
})

const placementClass: Record<MenuPlacement, string> = {
  'top': 'bottom-0',
  'bottom': '',
  'left': 'left-0',
  'right': 'right-0',
  'bottom-right': 'bottom-0 right-0',
  'right-child': 'right-auto top-9 lg:-right-[105%] lg:-top-2',
}

const route = useRoute()
const isActive = props.to ? route.path === props.to : false
const menuPlacement = props.isChild ? 'right-child' : props.placement
</script>

<template>
  <Popover class="relative inline">
    <slot name="activator">
      <PopoverButton
        class="text-sm font-semibold leading-6 text-gray-900"
        :class="{
          'text-primary-600': isActive,
          'flex justify-between items-center px-3 text-sm rounded py-2 leading-normal hover:bg-gray-100 font-normal w-full text-left text-gray-600': isChild,
        }"
      >
        {{ title }}
        <Icon v-if="items?.length || $slots.default" :name="isChild ? 'heroicons:chevron-right-20-solid' : 'heroicons:chevron-down-20-solid'" />
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
          v-if="items?.length || $slots.default"
        v-slot="{ close }"
        class="absolute mt-2 z-20 bg-white shadow-md p-1 w-56 rounded-md"
        :class="placementClass[menuPlacement]"
      >
        <div class="flex flex-col">
          <slot>
            <template v-for="item in items" :key="item.title">
              <div v-if="item.divider" class="border-t my-1 -mx-1" />
              <div v-else-if="item.header" class="text-gray-700 select-none font-semibold text-sm px-3 py-2">
                {{ item.header }}
              </div>
              <Menus
                v-else-if="item.children" :title="item.title" :to="item.to" :items="item.children" :placement="item.placement"
                is-child
              />
              <MenusItem
                v-else
                v-bind="item"
                @click="item.onClick ? item.onClick(close) : close()"
              />
            </template>
          </slot>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
