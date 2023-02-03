<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const items = [
  { id: 1, text: 'Wade Cooper' },
  { id: 2, text: 'Arlene Mccoy' },
  { id: 3, text: 'Devon Webb' },
  { id: 4, text: 'Tom Cook' },
  { id: 5, text: 'Tanya Fox' },
  { id: 6, text: 'Hellen Schmidt' },
]

const selected = ref()
const selectedMultiple = ref()
</script>

<template>
  <h3 class="font-semibold">
    Default
  </h3>
  <UIAutocomplete v-model="selected" :items="items" placeholder="Search..." class="mb-4" />

  <h3 class="font-semibold">
    Multiple
  </h3>
  <UIAutocomplete v-model="selectedMultiple" :items="items" placeholder="Multiple..." multiple />

  <h3 class="font-semibold mt-10">
    Debug
  </h3>
  <pre>{{ { selected, selectedMultiple } }}</pre>
</template>
