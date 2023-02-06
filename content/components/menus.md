# Menus

Menus components. Based on Headless UI Popover component. Support multi level sub menus.

## Usage

Use `<Menus />` component to create menu.

::live-preview
  ::nav{class="space-x-3"}
  ::menus{title="Home"}
  ::
  ::menus{title="About"}
  ::

  ::menus
  ---
  title: Settings
  items:
    - header: Header
      to: /
    - title: Menu 1
      to: /
      shortcut: alt+e
    - title: Menu 2
      to: /
      shortcut: ctrl+1
    - divider: true
    - title: Menu 3
      to: /
    - title: Menu 4
      to: /
    - title: Menu 5
      to: /
    - divider: true
    - title: Sub Menus
      to: /
      children:
        - title: Menu 1
          to: /
        - title: Menu 2
          to: /
        - title: Menu 2
          to: /
        - title: Sub Menus 2
          to: /
          children:
            - title: Menu 1
              to: /
            - title: Menu 2
              to: /
            - title: Menu 2
              to: /
  ---
  ::
  ::
::

::code-block
```vue
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
  <Menus title="Home" />
  <Menus title="About" />
  <Menus title="Settings" :items="items" />
</template>
```
::

## Props

| Prop | Type | Default Value |
|----|----|----|
| `title` | `string` | `''` |
| `to` | `string \| RouteLocation` | `''` |
| `items` | `MenuItem[]` | `[]` |
| `isChild` | `boolean` | `false` |
| `placement` | `string` | `''` |