<script setup lang="ts">
// import { ref, toRefs } from "vue";

// interface Props {
//   modelValue?: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   modelValue: "",
// });

// const { modelValue } = toRefs(props);

// const emit = defineEmits(["update:modelValue"]);

// const value = ref("");
</script>

<template>
  <nuxt-link
    class="hover:text-primary-500 block sm:inline-flex sm:items-center dark:text-gray-300 dark:hover:text-primary-500"
    exact-active-class="dark:text-primary-500 text-primary-500 font-semibold"
    v-bind="$attrs"
  >
    <slot />
  </nuxt-link>
</template>

<style scoped></style>
