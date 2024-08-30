<script setup lang="ts">
const VButton = resolveComponent('VButton')
</script>

<template>
  <VDropdown>
    <template #activator>
      <VDropdownButton :as="VButton" color="primary">
        My Dropdown
      </VDropdownButton>
    </template>
    <VDropdownItem>Item 1</VDropdownItem>
    <VDropdownItem>Item 2</VDropdownItem>
    <VDropdownItem>Item 3</VDropdownItem>
    <VDropdownItem divider />
    <VDropdownItem>Item 5</VDropdownItem>
    <VDropdownItem>Item 6</VDropdownItem>
  </VDropdown>
</template>
