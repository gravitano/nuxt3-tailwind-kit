<script lang="ts" setup>
const props = defineProps<{
  menu: Record<string, any>;
}>();

const isOpen = ref(false);
</script>

<template>
  <li>
    <SidebarLink
      v-bind="menu"
      :parent="!!menu.children"
      @click="isOpen = !isOpen"
    />
    <ul v-if="menu.children" :class="isOpen ? 'block' : 'hidden'">
      <li v-for="child in menu.children" :key="child.text">
        <SidebarLink v-bind="child" child />
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
