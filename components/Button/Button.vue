<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'default',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
    validator: (v: string) =>
      ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(v),
  },
  icon: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => {
  return [
    'btn',
    `btn-${props.color}`,
    `btn-${props.size}`,
    {
      'btn-outlined': props.outlined,
      'btn-text': props.text,
      'btn-rounded': props.rounded,
      'btn-block': props.block,
      'btn-underline': props.underline,
      'btn-icon': props.icon,
    },
  ];
});

const tag = computed(() =>
  props.to ? 'nuxt-link' : props.href ? 'a' : 'button'
);
</script>

<template>
  <component :is="tag" :to="to" :href="href" :type="type" :class="classes">
    <slot />
  </component>
</template>

<style scoped>
.btn {
  @apply inline-flex justify-center items-center appearance-none border rounded font-semibold transition duration-300
    focus:ring focus:outline-none focus:ring-offset-1;
}

.btn-rounded {
  @apply rounded-full;
}

.btn-text {
  @apply p-0 inline border-none;
}

.btn-underline {
  @apply underline;
}

.btn-block {
  @apply w-full block;
}

/* 
 * -----
 * SIZES
 * -----
 */

.btn-xxs {
  @apply text-xs px-1.5 py-1;
}

.btn-xs {
  @apply text-xs px-2 py-1.5;
}

.btn-sm {
  @apply text-sm px-2.5 py-1.5;
}

.btn-md {
  @apply px-3 py-2;
}

.btn-lg {
  @apply text-base px-4 py-2.5;
}

.btn-xl {
  @apply text-lg px-5 py-3;
}

.btn-2xl {
  @apply text-xl px-5 py-4;
}
.btn:disabled {
  @apply bg-gray-100 hover:bg-gray-100 hover:border-gray-100 text-gray-400 border-gray-100 cursor-not-allowed dark:bg-gray-800 dark:border-gray-800 dark:text-gray-600;
}

/* 
 * -----
 * COLORS
 * -----
 */

/* default */
.btn,
.btn-default {
  @apply border-gray-500 bg-white hover:bg-gray-100 dark:text-gray-900;
}

/* primary */
.btn-primary {
  @apply border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600 text-white dark:text-white
    focus:ring-primary-300;
}

/* secondary */
.btn-secondary {
  @apply border-secondary-500 bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 text-white dark:text-white
  focus:ring-secondary-300;
}

/* info */
.btn-info {
  @apply border-info-500 bg-info-500 hover:bg-info-600 hover:border-info-600 text-white dark:text-white
    focus:ring-info-300;
}

/* warning */
.btn-warning {
  @apply border-warning-500 bg-warning-500 hover:bg-warning-600 hover:border-warning-600 text-white dark:text-white
    focus:ring-warning-300;
}

/* error */
.btn-error {
  @apply border-error-500 bg-error-500 hover:bg-error-600 hover:border-error-600 text-white dark:text-white
    focus:ring-error-300;
}

/* success */
.btn-success {
  @apply border-success-500 bg-success-500 hover:bg-success-600 hover:border-success-600 text-white dark:text-white
    focus:ring-success-300;
}

/* dark */
.btn-dark {
  @apply border-gray-800 bg-gray-800 hover:bg-gray-900 hover:border-gray-900 text-white dark:text-white
    focus:ring-gray-300;
}

/*
 * OUTLINED VARIANT
 * ----------------
 */

/* default */
.btn.btn-outlined,
.btn-default.btn-outlined {
  @apply border-gray-500 bg-transparent hover:bg-gray-100;
}

.btn-default.btn-outlined {
  @apply dark:text-white dark:hover:bg-gray-800;
}

/* primary */
.btn-primary.btn-outlined {
  @apply bg-transparent border-primary-500 hover:bg-primary-100  text-primary-500;
}

/* secondary */
.btn-secondary.btn-outlined {
  @apply bg-transparent border-secondary-500 hover:bg-secondary-100  text-secondary-500;
}

/* info */
.btn-info.btn-outlined {
  @apply bg-transparent border-info-500 hover:bg-info-100  text-info-500;
}

/* warning */
.btn-warning.btn-outlined {
  @apply bg-transparent border-warning-500 hover:bg-warning-100  text-warning-500;
}

/* error */
.btn-error.btn-outlined {
  @apply bg-transparent border-error-500 hover:bg-error-100  text-error-500;
}

/* success */
.btn-success.btn-outlined {
  @apply bg-transparent border-success-500 hover:bg-success-100  text-success-500;
}
/* dark */
.btn-dark.btn-outlined {
  @apply bg-transparent border-gray-800 hover:bg-gray-100  text-gray-800 dark:text-white dark:border-gray-400 dark:hover:bg-gray-800;
}

/*
 * TEXT VARIANT
 * ----------------
 */

/* default */
.btn.btn-text,
.btn-default.btn-text {
  @apply border-gray-500 bg-transparent hover:bg-transparent hover:text-gray-600;
}

.btn-default.btn-text {
  @apply dark:text-white dark:hover:text-gray-400;
}

/* primary */
.btn-primary.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-primary-600 text-primary-500;
}

/* secondary */
.btn-secondary.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-secondary-600 text-secondary-500;
}

/* info */
.btn-info.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-info-600 text-info-500;
}

/* warning */
.btn-warning.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-warning-600 text-warning-500;
}

/* error */
.btn-error.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-error-600 text-error-500;
}

/* success */
.btn-success.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-success-600 text-success-500;
}
/* dark */
.btn-dark.btn-text {
  @apply bg-transparent hover:bg-transparent hover:text-gray-900 text-gray-800 dark:text-gray-100 dark:hover:text-gray-400;
}

/** ICON **/
.btn-icon.btn-xxs {
  @apply w-6 h-6;
}
.btn-icon.btn-xs {
  @apply w-8 h-8;
}
.btn-icon.btn-sm {
  @apply w-10 h-10;
}
.btn-icon.btn-md {
  @apply w-12 h-12;
}
.btn-icon.btn-lg {
  @apply w-14 h-14;
}
.btn-icon.btn-xl {
  @apply w-16 h-16;
}
.btn-icon.btn-2xl {
  @apply w-20 h-20;
}
</style>
