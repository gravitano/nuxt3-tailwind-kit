import type { Story } from '@storybook/vue3'
import { colors, variants } from '../../utils/buttons'
import VButton from './Button.vue'

const sizes = ['sm', 'md', 'lg']

export default {
  title: 'Components/Button',
  component: VButton,
  args: {},
}

const Template: Story = (args, { argTypes }) => ({
  components: { VButton },
  setup() {
    return { args, argTypes, variants }
  },
  template: `
    <VButton v-bind="args">
      Button
    </VButton>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Colors: Story = (args, { argTypes }) => ({
  components: { VButton },
  setup() {
    return { args, argTypes, colors }
  },
  template: `
  <div :class="args.block ? 'space-y-2' : 'space-x-2'">
    <VButton v-for="color in colors" :key="color" v-bind="args" :color="color">
      {{ color }}
    </VButton>
  </div>
  `,
})

export const Variants: Story = (args, { argTypes }) => ({
  components: { VButton },
  setup() {
    return { args, argTypes, variants }
  },
  template: `
  <div :class="args.block ? 'space-y-2' : 'space-x-2'">
    <VButton v-for="variant in variants" :key="variant" v-bind="args" :color="variant">
      {{ variant }}
    </VButton>
  </div>
  `,
})

export const Sizes: Story = (args, { argTypes }) => ({
  components: { VButton },
  setup() {
    return { args, argTypes, sizes }
  },
  template: `
  <div class="align-bottom space-x-2">
    <VButton v-for="size in sizes" :key="size" v-bind="args" :size="size" class="!shrink-0">
      button: {{ size }}
    </VButton>
  </div>
  `,
})

export const Icon: Story = (args, { argTypes }) => ({
  components: { VButton },
  setup() {
    return { args, argTypes, sizes }
  },
  template: `
    <VButton v-bind="args">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
    </VButton>
  `,
})
