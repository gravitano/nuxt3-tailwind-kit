<script setup lang="ts">
import EyeIcon from '~icons/ri/eye-line';
import PencilIcon from '~icons/ri/pencil-line';
import TrashIcon from '~icons/ri/delete-bin-line';
import CheckIcon from '~icons/ri/check-line';
import XIcon from '~icons/ri/close-line';

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
