import type { Story } from '@storybook/vue3';
import Button from './Button.vue';

const variants = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'success',
  'dark',
];

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export default {
  title: 'Components/Button',
  component: Button,
  args: {},
};

const Template: Story = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args, argTypes, variants };
  },
  template: `
  <div :class="args.block ? 'space-y-2' : 'space-x-2'">
    <Button v-for="variant in variants" :key="variant" v-bind="args" :color="variant">
    {{ variant }}
    </Button>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const Text = Template.bind({});
Text.args = {
  text: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Block = Template.bind({});
Block.args = {
  block: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Sizes: Story = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args, argTypes, sizes };
  },
  template: `
  <div class="align-bottom space-x-2">
    <Button v-for="size in sizes" :key="size" v-bind="args" :size="size" class="!shrink-0">
      button: {{ size }}
    </Button>
  </div>
  `,
});

export const Icon: Story = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args, argTypes, sizes };
  },
  template: `
    <Button v-bind="args" :size="size">
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
    </Button>
  `,
});
