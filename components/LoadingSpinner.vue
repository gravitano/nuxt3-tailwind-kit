<template>
  <div class="spinner" v-if="loading">
    <!-- You can use any CSS framework spinner or a custom SVG -->
    <img src="/spinner.gif" alt="Loading...">
  </div>
</template>

<script setup>
// You can use a reactive state to control visibility
const props = defineProps({
  loading: Boolean
})
</script>

<style scoped>
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
