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
    shortcuts: [
      'alt + e',
      'ctrl + 1',
    ],
  },
  {
    title: 'Remove',
    icon: 'ic:round-close',
    shortcuts: [
      'ctrl + w',
    ],
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
