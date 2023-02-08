# MenusItem

Sub menu item.

## Usage

Use `<MenusItem />` component to add sub menu.

::live-preview
  ::menus
  ---
  title: Account
  items:
    - title: Profile
    - title: Preferences
      shortcut: cmd+e
    - divider: true
    - title: Logout
      shortcut: cmd+alt+q
  ---
  ::
::

::code-block
```vue
<template>
  <Menus title="Settings">
    <MenusItem>Account</MenusItem>
    <MenusItem shortcut="cmd+e">Settings</MenusItem>
    <MenusItem divider />
    <MenusItem shortcut="cmd+alt+q">Logout</MenusItem>
  </Menus>
</template>
```
::

## Props

| Prop        | Type                      | Default Value                 |
| ----------- | ------------------------- | ----------------------------- |
| `title`     | `string`                  | `''`                          |
| `to`        | `string \| RouteLocation` | `''`                          |
| `icon`      | `string`                  | ``                            |
| `shortcut`  | `string`                  | ``                            |
| `header`    | `string`                  | ``                            |
| `divider`   | `string`                  | ``                            |
| `children`  | `Props[]`                 | ``                            |
| `placement` | `MenuPlacement`           | ``                            |
| `onClick`   | `Function`                | `(close: () => void) => void` |

## Event

None.

## Types

```ts
interface Props {
  to?: string | RouteLocation
  title: string
  icon?: string
  shortcut?: string
  header?: string
  divider?: boolean
  children?: Props[]
  placement?: MenuPlacement
  onClick?: (close: () => void) => void
}
```