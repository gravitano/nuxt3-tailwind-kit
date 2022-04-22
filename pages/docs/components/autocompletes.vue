<script setup lang="ts">
const genItems = (max = 5) =>
  Array.from({ length: max }, (v, k) => ({
    text: `Item ${k + 1}`,
    value: k + 1,
  }));

const items = ref(genItems());
const selected = ref();
</script>

<template>
  <div class="space-y-5">
    <PageHeader
      title="Autocomplete"
      subtitle="Wrapper for combobox component"
    />

    <Card title="Default">
      <Autocomplete v-model="selected" :items="items" />
    </Card>

    <Card title="Label">
      <Autocomplete v-model="selected" label="Choose" :items="items" />
    </Card>

    <Card title="No Data">
      <Autocomplete v-model="selected" label="Choose" :items="[]" />
    </Card>
  </div>
</template>

<style scoped></style>
