<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">
    Open Modal
  </Button>
  <Modal
    v-model="isOpen"
  >
    <ModalHeader>
      Payment successful
    </ModalHeader>
    <ModalBody>
      Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
    </ModalBody>
    <ModalFooter>
      <Button @click="isOpen = false">
        Got it, thanks!
      </Button>
    </ModalFooter>
  </Modal>
</template>
