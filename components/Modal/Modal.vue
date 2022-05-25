<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    titleClass?: string;
    panelClass?: string;
    xButton?: boolean;
    closeText?: string;
    closeProps?: Record<string, any>;
    confirm?: boolean;
    confirmText?: string;
    confirmProps?: Record<string, any>;
    activator?: string;
    activatorProps?: Record<string, any>;
  }>(),
  {
    modelValue: false,
    closeText: "Close",
    confirmText: "OK",
    closeProps: () => ({}),
    confirmProps: () => ({}),
    activatorProps: () => ({}),
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "confirm", payload: { close: () => void }): void;
}>();

const isOpen = ref(props.modelValue);

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

function handleConfirm() {
  emit("confirm", {
    close: closeModal,
  });
}
</script>

<template>
  <ClientOnly>
    <slot name="activator" :open="openModal" :on="{ click: openModal }">
      <Button v-if="activator" @click="openModal" v-bind="activatorProps">
        <slot name="activatorText">
          {{ activator }}
        </slot>
      </Button>
    </slot>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
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
          <div class="flex min-h-full items-center justify-center p-4 text-center">
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
                class="w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
                :class="panelClass"
              >
                <slot name="header">
                  <DialogTitle
                    as="div"
                    class="flex gap-2 justify-between items-center px-4 pt-3"
                    :class="headerClass"
                  >
                    <slot name="title">
                      <h3
                        class="text-lg font-medium leading-6 text-gray-900"
                        :class="titleClass"
                      >
                        {{ title }}
                      </h3>
                    </slot>
                    <slot name="x-button" :x-button="xButton">
                      <button
                        v-if="xButton"
                        class="text-2xl text-gray-500 appearance-none px-2 -mr-2"
                        @click="closeModal"
                      >
                        &times;
                      </button>
                    </slot>
                  </DialogTitle>
                </slot>
                <div class="px-4 py-3" :class="bodyClass">
                  <slot />
                </div>

                <div class="px-4 pb-3 flex gap-2 justify-end" :class="footerClass">
                  <slot name="footer" :close="closeModal">
                    <Button type="button" @click="closeModal" v-bind="closeProps">
                      {{ closeText }}
                    </Button>
                    <Button
                      v-if="confirm"
                      type="button"
                      color="primary"
                      @click="handleConfirm"
                      v-bind="confirmProps"
                    >
                      {{ confirmText }}
                    </Button>
                  </slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>
</template>
