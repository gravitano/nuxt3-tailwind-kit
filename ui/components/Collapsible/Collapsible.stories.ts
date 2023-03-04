import type { Story } from '@storybook/vue3'
import Collapsible from './Collapsible.vue'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  args: {
    modelValue: false,
    title: 'Item',
    content: 'lorem ipsum dolor sit amet',
  },
}

const Template: Story = (args, { argTypes }) => ({
  components: { Collapsible },
  setup() {
    return { args, argTypes }
  },
  template: `
    <Collapsible v-bind="args"/>
  `,
})

export const Default = Template.bind({})
Default.args = {}
