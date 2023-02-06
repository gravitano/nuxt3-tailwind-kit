<script setup lang="ts">
definePageMeta({
})

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
  <div class="space-y-4">
    <PageHeader title="Menus" subtitle="Menus component" />

    <Card hide-footer title="Menus">
      <div class="flex flex-row gap-4">
        <Menus title="Home" />
        <Menus title="About" />
        <Menus title="Multi Level Menu" :items="items" />
      </div>
    </Card>
  </div>
</template>
