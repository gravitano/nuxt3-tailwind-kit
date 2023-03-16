<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const props = defineProps({
  type: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'light' | 'dark'>,
    default: 'light',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'primary' | 'tertiary' | 'ghost'>,
    default: 'primary',
    validator: (v: string) => ['primary', 'tertiary', 'ghost'].includes(v),
  },
  block: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
    validator: (v: string) => ['sm', 'md', 'lg'].includes(v),
  },
  shadow: {
    type: [Boolean, String] as PropType<boolean | 'sm' | 'md' | 'lg' | 'xl'>,
    default: false,
    validator: (v: boolean | string) => [true, false, 'sm', 'md', 'lg', 'xl'].includes(v),
  },
})

const tag = computed(() => (props.to ? 'nuxt-link' : props.href ? 'a' : 'button'))

const btn = tv({
  base: `inline-flex items-center gap-2 justify-center border border-transparent text-center font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition duration-200 ease-in-out
    disabled:cursor-not-allowed
    `,
  variants: {
    color: {
      light: 'bg-white text-gray-800 border-gray-400 hover:bg-gray-100 focus:ring-indigo-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:bg-gray-200',
      dark: 'text-white bg-neutral-800 border-neutral-800 focus:ring-neutral-800 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:border-neutral-500',
      primary: 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600 disabled:bg-indigo-400 disabled:text-indigo-200 disabled:border-indigo-400',
      secondary: 'bg-gray-600 border-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:border-gray-400',
      warning: 'bg-amber-500 border-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 disabled:bg-amber-300 disabled:text-amber-100 disabled:border-amber-300',
      error: 'bg-rose-600 border-rose-600 text-white hover:bg-rose-700 focus:ring-rose-600 disabled:bg-rose-400 disabled:text-rose-200 disabled:border-rose-400',
      success: 'bg-green-600 border-green-600 text-white hover:bg-green-700 focus:ring-green-600 disabled:bg-green-400 disabled:text-green-200 disabled:border-green-400',
    },
    size: {
      sm: 'px-2 py-1 text-sm h-[28px]',
      md: 'px-3.5 py-1.5 text-sm',
      lg: 'py-3 px-8 text-lg h-[48px]',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    variant: {
      primary: '',
      tertiary: 'bg-transparent',
      ghost: 'bg-transparent border-none',
    },
    shadow: {
      true: 'shadow',
      false: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'light',
    rounded: false,
  },
  compoundVariants: [
    // primary
    {
      variant: 'tertiary',
      color: 'primary',
      class: 'text-indigo-600 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'primary',
      class: 'text-indigo-600 hover:bg-indigo-100',
    },
    // secondary
    {
      variant: 'tertiary',
      color: 'secondary',
      class: 'text-gray-600 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: 'text-gray-600 hover:bg-gray-100',
    },
    // warning
    {
      variant: 'tertiary',
      color: 'warning',
      class: 'text-amber-600 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: 'text-amber-600 hover:bg-amber-100',
    },
    // error
    {
      variant: 'tertiary',
      color: 'error',
      class: 'text-rose-600 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'error',
      class: 'text-rose-600 hover:bg-rose-100',
    },
    // success
    {
      variant: 'tertiary',
      color: 'success',
      class: 'text-green-600 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'success',
      class: 'text-green-600 hover:bg-green-100',
    },
    // light
    {
      variant: 'tertiary',
      color: 'light',
      class: 'text-gray-800 hover:bg-gray-800 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'light',
      class: 'text-gray-800 hover:bg-gray-100',
    },
    // dark
    {
      variant: 'tertiary',
      color: 'dark',
      class: 'text-neutral-800 hover:bg-neutral-800 hover:text-white',
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: 'text-neutral-800 hover:bg-neutral-100',
    },
  ],
})
</script>

<template>
  <component
    :is="tag" :to="to" :href="href" :type="type" :class="btn({
      size,
      color,
      rounded,
      variant,
      shadow,
      block,
    })"
  >
    <slot />
  </component>
</template>
