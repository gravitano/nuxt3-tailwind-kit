import type { Story } from '@storybook/vue3'
import Select from './Select.vue'
import type { SelectItem } from './types'

const genItems = (length = 5): SelectItem[] =>
  Array.from({ length }, (_, v) => ({
    text: `Item ${v + 1}`,
    value: v,
  }))

const items = [...genItems(2), { divider: true }, ...genItems(3)]

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    modelValue: null,
    label: 'Choose',
    items,
  },
}

const Template: Story = (args, { argTypes }) => ({
  components: { Select },
  setup() {
    return { args, argTypes }
  },
  template: `
    <div class="flex justify-center">
      <Select v-bind="args"/>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Selected = Template.bind({})
Selected.args = {
  modelValue: items[0],
}

// export const Slots: Story = (args, { argTypes }) => ({
//   components: { Select, SelectItem },
//   setup() {
//     return { args, argTypes };
//   },
//   template: `
//     <div class="flex justify-center">
//       <Select v-bind="args">
//         <div class="p-1">
//           <SelectItem text="Calendar" icon="calendar"/>
//           <SelectItem text="Files" icon="document" />
//           <SelectItem divider/>
//           <SelectItem text="Timer" icon="clock"/>
//         </div>
//       </Select>
//     </div>
//   `,
// });
