# Autocomplete

Autocomplete component based on Headless UI `Combobox` component. Support multiple selection.

## Usage

Use `<Autocomplete />` component to create autocomplete input.

::live-preview
  ::autocomplete
  ---
  placeholder: Choose...
  items:
    - text: Item 1
      value: 1
    - text: Item 2
      value: 2
    - text: Item 3
      value: 3
    - text: Item 4
      value: 4
    - text: Item 5
      value: 5
  ---
  ::
::

::code-block
```vue
<template>
  <Autocomplete
    placeholder="Choose..." :items="[
      { value: 1, text: 'Wade Cooper' },
      { value: 2, text: 'Arlene Mccoy' },
      { value: 3, text: 'Devon Webb' },
      { value: 4, text: 'Tom Cook' },
      { value: 5, text: 'Tanya Fox' },
      { value: 6, text: 'Hellen Schmidt' },
    ]"
  />
</template>
```
::

## Multiple

Use `multiple` prop to enable multiple selection to the autocomplete component.

::live-preview
  ::autocomplete
  ---
  placeholder: Choose...
  multiple: true
  items:
    - text: Item 1
      value: 1
    - text: Item 2
      value: 2
    - text: Item 3
      value: 3
    - text: Item 4
      value: 4
    - text: Item 5
      value: 5
  ---
  ::
::

::code-block
```vue
<template>
  <Autocomplete
    multiple
    placeholder="Choose..." :items="[
      { value: 1, text: 'Wade Cooper' },
      { value: 2, text: 'Arlene Mccoy' },
      { value: 3, text: 'Devon Webb' },
      { value: 4, text: 'Tom Cook' },
      { value: 5, text: 'Tanya Fox' },
      { value: 6, text: 'Hellen Schmidt' },
    ]"
  />
</template>
```
::

## Props

| Prop | Type | Default Value |
|----|----|----|
| `modelValue` | `Item \| Item[] \| undefined \| null` | `undefined` |
| `multiple` | `string` | `false` |
| `placeholder` | `string` | `''` |
| `items` | `string` | `[]` |
| `itemText` | `string` | `'text'` |
| `itemValue` | `string` | `'value'` |