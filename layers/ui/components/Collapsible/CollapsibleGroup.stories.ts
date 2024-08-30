import type { Story } from '@storybook/vue3'
import CollapsibleGroup from './CollapsibleGroup.vue'

const genItems = (length = 5): any[] =>
  Array.from({ length }, (_, v) => ({
    title: `Item ${v + 1}`,
    content: `lorem ipsum ${v + 1}`,
  }))

const items = genItems(5)

export default {
  title: 'Components/CollapsibleGroup',
  component: CollapsibleGroup,
  args: {
    modelValue: false,
    accordion: false,
    items,
  },
}

const Template: Story = (args, { argTypes }) => ({
  components: { CollapsibleGroup },
  setup() {
    return { args, argTypes }
  },
  template: `
    <CollapsibleGroup v-bind="args"/>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Accordion = Template.bind({})
Accordion.args = {
  accordion: true,
}
