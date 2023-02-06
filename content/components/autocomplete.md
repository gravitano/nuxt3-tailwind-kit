# Autocomplete

Autocomplete component based on Headless UI `Combobox` component. Support multiple selection.

## Basic Usage

::live-preview
  <Autocomplete placeholder="Choose..." :items="[
  { value: 1, text: 'Wade Cooper' },
  { value: 2, text: 'Arlene Mccoy' },
  { value: 3, text: 'Devon Webb' },
  { value: 4, text: 'Tom Cook' },
  { value: 5, text: 'Tanya Fox' },
  { value: 6, text: 'Hellen Schmidt' },
]" />
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

::live-preview
  <Autocomplete multiple placeholder="Choose..." :items="[
  { value: 1, text: 'Wade Cooper' },
  { value: 2, text: 'Arlene Mccoy' },
  { value: 3, text: 'Devon Webb' },
  { value: 4, text: 'Tom Cook' },
  { value: 5, text: 'Tanya Fox' },
  { value: 6, text: 'Hellen Schmidt' },
]" />
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