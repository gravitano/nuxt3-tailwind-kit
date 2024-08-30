<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'

interface Props {
  dismissable?: boolean
  titleClass?: string
}

defineProps<Props>()

const api = inject('modal')
</script>

<template>
  <DialogTitle
    as="div"
    class="flex gap-2 justify-between items-center px-4 pt-3"
  >
    <h3
      class="text-lg font-medium leading-6 text-gray-900"
      :class="titleClass"
    >
      <slot />
    </h3>
    <slot v-if="dismissable" name="dismissable">
      <button
        class="text-2xl text-gray-500 appearance-none px-2 -mr-2"
        @click="api.close"
      >
        &times;
      </button>
    </slot>
  </DialogTitle>
</template>
