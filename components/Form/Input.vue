<script setup lang="ts">
import { useField } from 'vee-validate';

const props = withDefaults(
  defineProps<{
    label?: string;
    name?: string;
    rules?: string;
    placeholder?: string;
    type?: string;
  }>(),
  {
    type: 'text',
  }
);

const { value, errorMessage } = useField(props.name, props.rules);
</script>

<template>
  <div class="mb-4">
    <label
      v-if="label"
      class="block font-medium mb-1 text-gray-700"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      v-model="value"
      :type="type"
      :id="name"
      :placeholder="placeholder"
      class="rounded-md w-full focus:ring transition duration-300"
      :class="[
        errorMessage
          ? 'border-error-500 focus:ring-error-500 focus:ring-opacity-50 focus:border-error-500'
          : 'border-gray-300 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500',
      ]"
    />
    <div v-if="errorMessage" class="text-error-500 text-sm mt-1">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped></style>
