# DropdownItem

Sub component of `<Dropdown />`. This component is used as dropdown item.

## Example

```vue
<template>
  <Dropdown>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownItem>Item 3</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Item 5</DropdownItem>
    <DropdownItem>Item 6</DropdownItem>
  </Dropdown>
</template>
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| text | `string` | `undefined` | The text to display in the item. |
| to | `string` | `undefined` | The target route for the item when used in a `nuxt-link`. |
| href | `string` | `undefined` | The target URL for the item when used as a regular `a` tag. |
| icon | `any` | `undefined` | The icon to display in the item. |
| iconClass | `string` | `'w-5 h-5'` | The class for the icon. |
| newTab | `boolean` | `undefined` | Specifies whether to open the link in a new tab. |
| divider | `boolean` | `undefined` | Specifies whether to display a divider above the item. |


## Slots

### default

The default Vue slot. Used to place text / content.

```vue
<template>
  <Dropdown>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownItem>Item 3</DropdownItem>
  </Dropdown>
</template>
```


### icon

Slot for placing custom icon.

```vue
<template>
  <Dropdown>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>
      <template #icon>
        <Icon name="ic:round-home" />
      </template>
      Item 2
    </DropdownItem>
  </Dropdown>
</template>
```