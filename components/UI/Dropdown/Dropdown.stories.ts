import type { Story } from '@storybook/vue3'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import type { DropdownItemProps } from './types'

const icons = ['calendar', 'attachment', 'download', 'clock', 'document']

const genItems = (length = 5): DropdownItemProps[] =>
  Array.from({ length }, (_, v) => ({
    text: `Item ${v + 1}`,
    icon: icons[Math.floor(Math.random() * icons.length)],
  }))

const items = [...genItems(2), { divider: true }, ...genItems(3)]

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    modelValue: false,
    right: false,
    btnProps: {
      variant: 'secondary',
    },
    label: 'Options',
    items,
  },
}

const Template: Story = (args, { argTypes }) => ({
  components: { Dropdown },
  setup() {
    return { args, argTypes }
  },
  template: `
    <div class="flex justify-center">
      <Dropdown v-bind="args"/>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Right = Template.bind({})
Right.args = {
  right: true,
}

export const RouterLink = Template.bind({})
RouterLink.args = {
  items: [
    {
      text: 'Link 1',
      to: '/home',
    },
  ],
}

export const Href = Template.bind({})
Href.args = {
  items: [
    {
      text: 'Link 1',
      href: '/home',
    },
    {
      text: 'Link 2',
      href: '/setting',
      newTab: true,
    },
  ],
}

export const Slots: Story = (args, { argTypes }) => ({
  components: { Dropdown, DropdownItem },
  setup() {
    return { args, argTypes }
  },
  template: `
    <div class="flex justify-center">
      <Dropdown v-bind="args">
        <div class="p-1">
          <DropdownItem text="Calendar" icon="calendar"/>
          <DropdownItem text="Files" icon="document" />
          <DropdownItem divider/>
          <DropdownItem text="Timer" icon="clock"/>
        </div>
      </Dropdown>
    </div>
  `,
})
