<script setup lang="ts">
const items = [
  {
    header: 'Header Menu',
  },
  {
    title: 'Edit',
    icon: 'ic:round-edit',
    shortcut: 'ctrl + e',
  },
  {
    title: 'Remove',
    icon: 'ic:round-close',
    shortcut: 'alt + r',
    onClick() {
      alert('Removed')
    },
  },
  {
    divider: true,
  },
  {
    title: 'Child Menu',
    to: '#',
    children: [
      { to: '/menu/1', title: 'Menu 1' },
      { to: '/menu/2', title: 'Menu 2' },
      { to: '/menu/3', title: 'Menu 3' },
      {
        title: 'Sub Child Menu',
        to: '#',
        children: [
          { to: '/menu/1', title: 'Menu 1' },
          { to: '/menu/2', title: 'Menu 2' },
          { to: '/menu/3', title: 'Menu 3' },
        ],
      },
    ],
  },
]
</script>

<template>
  <nav class="space-x-2">
    <VMenus title="Home" />
    <VMenus title="About" />
    <VMenus title="Settings" :items="items" />
  </nav>
</template>
