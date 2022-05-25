<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div class="space-y-5">
    <PageHeader title="Modal" subtitle="Modal component" />

    <Card title="Default">
      <Modal title="Header" activator="Open Modal"> Modal body </Modal>
    </Card>

    <Card title="Custom Activator">
      <Modal title="Header">
        <template #activator="{ on }">
          <Button color="secondary" v-on="on">Click Me</Button>
        </template>
        <p>Modal body</p>
      </Modal>
    </Card>

    <Card title="X Button">
      <Modal title="Header" activator="Open Modal" x-button> Modal body </Modal>
    </Card>

    <Card title="Confirm">
      <Modal title="Header" activator="Open Modal" confirm @confirm="(e) => e.close()">
        Are you sure want to do this action?
      </Modal>
    </Card>

    <Card title="v-model">
      <Modal v-model="isOpen" title="Header" activator="Open Modal">
        This modal is controlled by model `isOpen`.
      </Modal>
    </Card>

    <Card title="Custom Class">
      <Modal
        title="Header"
        activator="Open Modal"
        header-class="border-b pb-3"
        footer-class="border-t pt-3 justify-center"
      >
        Custom body
      </Modal>
    </Card>
  </div>
</template>

<style scoped></style>
