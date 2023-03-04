<script setup lang="ts">
const items = ref([
  { value: 1, text: "Wade Cooper" },
  { value: 2, text: "Arlene Mccoy" },
  { value: 3, text: "Devon Webb" },
  { value: 4, text: "Tom Cook" },
  { value: 5, text: "Tanya Fox" },
  { value: 6, text: "Hellen Schmidt" },
]);

const selected = ref();
</script>

<template>
  <VSelect
    v-model="selected"
    placeholder="Choose..."
    :items="items"
    multiple
  />
</template>
