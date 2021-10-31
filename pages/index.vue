<script setup lang="ts">
import { ref, toRefs } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const { modelValue } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const value = ref("");
</script>

<template>
  <div>Hello</div>
</template>

<style scoped>
</style>