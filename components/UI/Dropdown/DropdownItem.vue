<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    to?: string;
    href?: string;
    icon?: any;
    iconClass?: string;
    newTab?: boolean;
    divider?: boolean;
  }>(),
  {
    iconClass: 'w-5 h-5',
  }
);

const computedComponent = computed(() => {
  if (props.href) return 'a';

  return props.to ? RouterLink : 'button';
});

const toProps = computed(() => {
  return props.to ? { to: props.to } : {};
});

const hrefProps = computed(() => {
  return props.href ? { href: props.href } : {};
});
</script>

<template>
  <MenuItem v-slot="{ active }">
    <div v-if="divider" class="border-b my-1 -mx-1"></div>
    <component
      v-else
      :is="computedComponent"
      :target="href && newTab ? '_blank' : undefined"
      :rel="href && newTab ? 'noopener' : null"
      :class="[
        active ? 'bg-gray-200' : 'text-gray-900',
        'group flex gap-2 rounded-md items-center w-full px-2 py-2',
      ]"
      v-bind="{ ...hrefProps, ...toProps, ...$attrs }"
    >
      <slot name="icon">
        <component :is="icon" :class="iconClass" />
      </slot>
      <slot>{{ text }}</slot>
    </component>
  </MenuItem>
</template>
