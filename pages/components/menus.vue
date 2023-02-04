<script setup lang="ts">
definePageMeta({
})

const items = [
  {
    to: '#',
    title: 'Edit',
    icon: 'ic:round-edit',
    shortcuts: [
      'alt + e',
      'ctrl + 1',
    ],
  },
  {
    to: '#',
    title: 'Remove',
    icon: 'ic:round-close',
    shortcuts: [
      'ctrl + w',
    ],
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

    <UICard hide-footer title="Menus">
      <div class="flex flex-row gap-4">
        <UIMenus title="Home" />
        <UIMenus title="About" />
        <UIMenus title="Multi Level Menu" :items="items" />
      </div>
    </UICard>
  </div>
</template>
