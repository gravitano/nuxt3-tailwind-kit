import type { Story } from '@storybook/vue3'
import Autocomplete from './Autocomplete.vue'

const items = [
  { id: 1, text: 'Wade Cooper' },
  { id: 2, text: 'Arlene Mccoy' },
  { id: 3, text: 'Devon Webb' },
  { id: 4, text: 'Tom Cook' },
  { id: 5, text: 'Tanya Fox' },
  { id: 6, text: 'Hellen Schmidt' },
]

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  args: {
    items,
  },
}

const Template: Story = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Autocomplete },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Autocomplete v-bind="args"/>',
})

export const Default = Template.bind({})
Default.args = {}

export const Multiple = Template.bind({})
Multiple.args = {
  multiple: true,
}
