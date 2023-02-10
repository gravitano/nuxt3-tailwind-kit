<script setup lang="ts">
import { MenuButton } from '@headlessui/vue'
</script>

<template>
  <MenuButton v-slot="props">
    <slot v-bind="props" />
  </MenuButton>
</template>
