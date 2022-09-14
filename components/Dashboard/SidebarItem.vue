<script lang="ts" setup>
defineProps<{
  menu: Record<string, any>;
}>();

const isOpen = ref(false);
</script>

<template>
  <li>
    <DashboardSidebarLink
      v-bind="menu"
      :parent="!!menu.children"
      @click="isOpen = !isOpen"
    />
    <ul v-if="menu.children" :class="isOpen ? 'block' : 'hidden'">
      <li v-for="child in menu.children" :key="child.text">
        <DashboardSidebarLink v-bind="child" child />
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
