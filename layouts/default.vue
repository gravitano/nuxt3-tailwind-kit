<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <Navbar />

    <div
      class="dark:bg-gray-900 transition-all duration-300 min-h-[calc(100vh-65px)]"
    >
      <div
        class="container mx-auto xl:p-4 py-4 flex flex-col sm:flex-row gap-4 px-4 sm:px-0"
      >
        <div class="w-full sm:w-2/12">
          <DocsSidebar />
        </div>
        <div class="w-full sm:w-9/12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
