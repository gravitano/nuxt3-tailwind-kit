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
    <PageHeader title="Select" subtitle="Select component" />

    <Card title="Default">
      <Select v-model="selected" label="Choose" :items="items" />
    </Card>

    <Card title="Sizing">
      <Select v-model="selected" label="Small" :items="items" small />
      <Select v-model="selected" label="Default" :items="items" />
      <Select v-model="selected" label="Large" :items="items" large />
    </Card>
  </div>
</template>

<style scoped></style>
