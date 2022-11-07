<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref, toRefs, watch } from 'vue'
import CollapseTransition from './CollapseTransition.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    title: string
    content?: string
    classes?: {
      wrapper?: string
      button?: string
      title?: string
      panel?: string
    }
  }>(),
  {
    modelValue: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'change',
  'toggle',
  'open',
  'close',
])

const { modelValue } = toRefs(props)
const isOpen = ref(modelValue.value)

watch(modelValue, (val) => {
  isOpen.value = val
})

watch(isOpen, (val) => {
  emit('update:modelValue', val)
  emit('change', val)

  if (val)
    emit('open')
  else
    emit('close')
})

const toggle = () => {
  emit('toggle')
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Disclosure v-slot="{ open }" as="div">
    <DisclosureButton
      class="
        flex
        items-center
        justify-between
        w-full
        py-2
        text-left text-15
        font-semibold
        rounded-lg
        focus:outline-none
        focus-visible:ring
        focus-visible:ring-blue-50
        focus-visible:ring-opacity-75
      "
      :class="classes?.button"
      type="button"
      @click="toggle"
    >
      <span :class="classes?.title">
        {{ title }}
      </span>
      <Icon
        name="heroicons:chevron-down"
        :class="open ? 'transform rotate-180' : ''"
        class="w-5 h-5"
      />
    </DisclosureButton>
    <CollapseTransition>
      <div v-show="isOpen">
        <DisclosurePanel static class="pb-2 text-15" :class="classes?.panel">
          <slot>{{ content }}</slot>
        </DisclosurePanel>
      </div>
    </CollapseTransition>
  </Disclosure>
</template>
