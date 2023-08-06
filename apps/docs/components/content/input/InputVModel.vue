<script setup lang="ts">
const value = ref('')
</script>

<template>
  <VInput
    v-model="value"
    label="Username"
    placeholder="Enter your username"
  />
  <pre class="mt-4">Value: {{ value }}</pre>
</template>
