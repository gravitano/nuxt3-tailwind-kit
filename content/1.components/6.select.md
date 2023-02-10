# Select

Select component based on Headless UI `Listbox`. Support multiple selection.

## Usage

Use `<Select />` component to create select input.

::live-preview
  ::select-demos-basic
::

::code-block

```vue
<script setup lang="ts">
const items = ref([
  { value: 1, text: "Wade Cooper" },
  { value: 2, text: "Arlene Mccoy" },
  { value: 3, text: "Devon Webb" },
  { value: 4, text: "Tom Cook" },
  { value: 5, text: "Tanya Fox" },
  { value: 6, text: "Hellen Schmidt" },
]);

const selected = ref();
</script>

<template>
  <Select
    v-model="selected"
    placeholder="Choose..."
    :items="items"
  />
</template>
```

::

## Multiple

Use `multiple` prop to enable multiple selection to the select component.

::live-preview
  ::select-demos-multiple
::

::code-block

```vue
<script setup lang="ts">
const items = ref([
  { value: 1, text: "Wade Cooper" },
  { value: 2, text: "Arlene Mccoy" },
  { value: 3, text: "Devon Webb" },
  { value: 4, text: "Tom Cook" },
  { value: 5, text: "Tanya Fox" },
  { value: 6, text: "Hellen Schmidt" },
]);

const selected = ref();
</script>

<template>
  <Select
    v-model="selected"
    placeholder="Choose..."
    :items="items"
    multiple
  />
</template>
```

::

## Props

| Property        | Type           | Required | Default    | Description                                                                      |
| --------------- | -------------- | -------- | ---------- | -------------------------------------------------------------------------------- |
| `modelValue`    | `SelectItem`   | Yes      | -          | The selected item in the dropdown list.                                          |
| `items`         | `SelectItem[]` | Yes      | `[]`       | An array of `SelectItem` objects to display in the dropdown list.                |
| `placeholder`   | `string`       | No       | `'Choose'` | The placeholder text to display when no item is selected.                        |
| `hideCheckIcon` | `boolean`      | No       | `false`    | Specifies whether to hide the check icon when an item is selected.               |
| `outlined`      | `boolean`      | No       | `false`    | Specifies whether the dropdown list should be displayed with an outlined border. |
| `large`         | `boolean`      | No       | `false`    | Specifies whether the dropdown list should be displayed with a large size.       |
| `small`         | `boolean`      | No       | `false`    | Specifies whether the dropdown list should be displayed with a small size.       |

## Events

| Name                | Payload               | Description                              |
| ------------------- | --------------------- | ---------------------------------------- |
| `update:modelValue` | `{value: SelectItem}` | Triggered when `modelValue` prop changed |

## Types

```ts
export type SelectItem = {
  text: string;
  value: string | number;
  divider?: boolean;
};
```