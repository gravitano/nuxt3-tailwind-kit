<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <VButton @click="isOpen = true">
    Open Modal
  </VButton>
  <Modal
    v-model="isOpen"
  >
    <ModalHeader>
      Payment successful
    </ModalHeader>
    <ModalBody>
      Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
    </ModalBody>
  </Modal>
</template>
