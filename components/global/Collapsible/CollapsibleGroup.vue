<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref, toRefs, watch } from 'vue'
import Icon from '../Icon/index.vue'
import Collapsible from './Collapsible.vue'

interface CollapsibleItem {
  title: string
  content: string
  isOpen?: boolean
}

const props
  = defineProps<{
    items?: CollapsibleItem[]
    classes?: {
      wrapper?: string
      button?: string
      title?: string
      panel?: string
    }
    accordion?: boolean
  }>()

const { items } = toRefs(props)

const children = ref(props.items)

watch(items, (val) => {
  children.value = val
})

const onToggle = (item: CollapsibleItem) => {
  if (props.accordion) {
    children.value.forEach((child) => {
      child.isOpen = false
    })
    item.isOpen = true
  }
}
</script>

<template>
  <div class="w-full p-2" :class="classes?.wrapper">
    <slot>
      <Collapsible
        v-for="(item, idx) in children"
        :key="idx"
        v-bind="item"
        v-model="item.isOpen"
        @toggle="onToggle(item)"
      />
    </slot>
  </div>
</template>
