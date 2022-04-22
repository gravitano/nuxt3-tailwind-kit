import Autocomplete from './Autocomplete.vue';

const items = [
  {id: 1, name: 'Wade Cooper'},
  {id: 2, name: 'Arlene Mccoy'},
  {id: 3, name: 'Devon Webb'},
  {id: 4, name: 'Tom Cook'},
  {id: 5, name: 'Tanya Fox'},
  {id: 6, name: 'Hellen Schmidt'},
];

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {},
  args: {
    items,
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {Autocomplete},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Autocomplete/>`,
});

export const Default = Template.bind({});
Default.args = {};
