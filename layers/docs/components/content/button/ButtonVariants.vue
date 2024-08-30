<script setup lang="ts">
</script>

<template>
  <div class="space-x-2 space-y-2" v-for="color in colors" :key="color">
    <VButton :color="color">
      Default
    </VButton>
    <VButton :color="color" variant="tertiary">
      Tertiary
    </VButton>
    <VButton :color="color" variant="ghost">
      Ghost
    </VButton>
  </div>
</template>
