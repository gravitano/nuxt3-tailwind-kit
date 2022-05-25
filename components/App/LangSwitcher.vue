<script setup lang="ts">
const langs = ["en", "id"];
</script>

<template>
  <select
    v-model="$i18n.locale"
    class="text-white text-xs bg-transparent uppercase border border-white rounded bg-none px-2 py-1 focus:ring-0"
  >
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
      {{ lang }}
    </option>
  </select>
</template>
