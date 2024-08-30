<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <VButton @click="isOpen = true">
    Open Modal
  </VButton>
  <VModal
    v-model="isOpen"
  >
    <VModalHeader dismissable>
      Payment successful
    </VModalHeader>
    <VModalBody>
      Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
    </VModalBody>
  </VModal>
</template>
