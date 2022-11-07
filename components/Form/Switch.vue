<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { useField } from 'vee-validate'

const props = withDefaults(
  defineProps<{
    name: string
    rules?: string
    srText?: string
    modelValue?: boolean
  }>(),
  {
    srText: '',
    modelValue: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const { name, rules } = toRefs(props)

const { value: enabled, errorMessage } = useField<boolean>(name, rules, {
  initialValue: props.modelValue,
})

watch(enabled, val => emit('update:modelValue', val))
</script>

<template>
  <div>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-primary-900' : 'bg-primary-700'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">{{ srText }}</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
    <div v-if="errorMessage" class="text-error-500 text-sm mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>
