<script setup lang="ts">
definePageMeta({
})

const items = [
  { value: 1, text: 'Wade Cooper' },
  { value: 2, text: 'Arlene Mccoy' },
  { value: 3, text: 'Devon Webb' },
  { value: 4, text: 'Tom Cook' },
  { value: 5, text: 'Tanya Fox' },
  { value: 6, text: 'Hellen Schmidt' },
]

const selected = ref()
const selectedMultiple = ref()
</script>

<template>
  <div class="space-y-4">
    <PageHeader title="Autocomplete" subtitle="Autocomplete component" />

    <Card hide-footer title="Autocomplete">
      <Autocomplete v-model="selected" :items="items" placeholder="Search..." class="mb-4" />
    </Card>

    <Card hide-footer title="Multiple">
      <Autocomplete v-model="selectedMultiple" :items="items" placeholder="Multiple..." multiple />
    </Card>

    <Card hide-footer title="Debug">
      <pre class="text-sm">{{ { selected, selectedMultiple } }}</pre>
    </Card>
  </div>
</template>
