<script setup lang="ts">
import { ref, toRefs } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  color: {
    type: String,
    default: "default",
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
});

const classes = computed(() => {
  return [
    "btn",
    `btn-${props.color}`,
    {
      "btn-outlined": props.outlined,
      "btn-text": props.text,
      "btn-rounded": props.rounded,
      "btn-block": props.block,
      "btn-underline": props.underline,
    },
  ];
});
</script>

<template>
  <button :type="type" :class="classes">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply appearance-none px-4 py-2.5 border rounded font-semibold transition duration-300;
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

/* default */
.btn,
.btn-default {
  @apply border-gray-500 bg-white hover:bg-gray-100;
}

/* primary */
.btn-primary {
  @apply border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600 text-white;
}

/* secondary */
.btn-secondary {
  @apply border-secondary-500 bg-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 text-white;
}

/* info */
.btn-info {
  @apply border-info-500 bg-info-500 hover:bg-info-600 hover:border-info-600 text-white;
}

/* secondary */
.btn-warning {
  @apply border-warning-500 bg-warning-500 hover:bg-warning-600 hover:border-warning-600 text-white;
}

/* secondary */
.btn-error {
  @apply border-error-500 bg-error-500 hover:bg-error-600 hover:border-error-600 text-white;
}

/* secondary */
.btn-success {
  @apply border-success-500 bg-success-500 hover:bg-success-600 hover:border-success-600 text-white;
}

/* dark */
.btn-dark {
  @apply border-gray-800 bg-gray-800 hover:bg-gray-900 hover:border-gray-900 text-white;
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
  @apply bg-transparent border-gray-800 hover:bg-gray-100  text-gray-800;
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
  @apply bg-transparent hover:bg-transparent hover:text-gray-900 text-gray-800;
}
</style>