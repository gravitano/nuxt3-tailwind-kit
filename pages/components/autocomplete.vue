<script setup lang="ts">
definePageMeta({
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
  <div class="space-y-4">
    <PageHeader title="Autocomplete" subtitle="Autocomplete component" />

    <UICard hide-footer title="Autocomplete">
      <UIAutocomplete v-model="selected" :items="items" placeholder="Search..." class="mb-4" />
    </UICard>

    <UICard hide-footer title="Multiple">
      <UIAutocomplete v-model="selectedMultiple" :items="items" placeholder="Multiple..." multiple />
    </UICard>

    <UICard hide-footer title="Debug">
      <pre class="text-sm">{{ { selected, selectedMultiple } }}</pre>
    </UICard>
  </div>
</template>
