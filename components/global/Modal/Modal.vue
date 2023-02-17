<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    persistent?: boolean
    fullscreen?: boolean
  }>(),
  {
    modelValue: false,
    persistent: false,
    fullscreen: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const { modelValue } = toRefs(props)

const isOpen = ref(modelValue.value)

watch(modelValue, (value) => {
  isOpen.value = value
})

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

function onModalClose() {
  if (!props.persistent)
    closeModal()
}

watch(isOpen, (value) => {
  emit('update:modelValue', value)
})

const api = {
  isOpen,
  open: openModal,
  close: closeModal,
}

provide('modal', api)
</script>

<template>
  <ClientOnly>
    <slot name="activator" :open="openModal" :on="{ click: openModal }" />

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-10" @close="onModalClose">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center text-center"
            :class="{
              'p-4': !fullscreen,
            }"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all"
                :class="{
                  'h-screen': fullscreen,
                  'max-w-md rounded-lg': !fullscreen,
                }"
              >
                <slot />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>
