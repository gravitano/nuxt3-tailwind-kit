<script setup lang="ts">
import { useField } from 'vee-validate'

const props = withDefaults(
  defineProps<{
    label?: string
    name?: string
    rules?: string
    placeholder?: string
    type?: string
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    name: '',
    type: 'text',
    size: 'sm',
  },
)

const { name, rules } = toRefs(props)

const { value, errorMessage } = useField(name, rules)

const sizeClass: Record<string, Record<string, string>> = {
  label: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
  input: {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-2 text-lg',
  },
}

const errorClass = 'border-error-500 focus:ring-error-500 focus:border-error-500'
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :class="sizeClass.label[size]" class="block font-medium mb-1 text-gray-700" :for="name">
      {{ label }}
    </label>
    <input
      :id="name"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      class="rounded-md w-full focus:ring-1 transition duration-300"
      :class="[
        sizeClass.input[size],
        errorMessage
          ? errorClass
          : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
      ]"
    >
    <div v-if="errorMessage" class="text-error-500 text-sm mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>
