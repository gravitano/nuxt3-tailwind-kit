<script setup lang="ts">
const colors = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'success',
  'error',
  'dark',
];

const variants = [
  '',
  'rounded',
  'outlined',
  'text',
  'block',
  'underline',
  'disabled',
];
const iconVariants = ['', 'rounded', 'outlined', 'text'];

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const bindVariant = (variant: string) => {
  return variant ? { [variant]: true } : {};
};
</script>

<template>
  <div>
    <PageHeader title="Buttons" subtitle="Button component" />

    <div class="space-y-6">
      <div
        v-for="variant in variants"
        :key="variant"
        class="space-x-2 space-y-2"
      >
        <h2 class="font-bold mb-2">{{ variant || 'default' }}</h2>
        <v-btn
          v-for="color in colors"
          :key="color"
          :color="color"
          v-bind="bindVariant(variant)"
        >
          {{ color }}
        </v-btn>
      </div>

      <h2 class="font-bold mb-2">Sizes</h2>
      <div v-for="size in sizes" :key="size" class="space-x-2 space-y-2">
        <h3 class="font-bold text-sm mb-2">{{ size }}</h3>
        <v-btn v-for="color in colors" :key="color" :color="color" :size="size">
          {{ color }}
        </v-btn>
      </div>

      <div class="space-x-2 space-y-2">
        <h2 class="font-bold mb-2">Anchor</h2>
        <div class="flex gap-2 flex-wrap">
          <v-btn
            v-for="color in colors"
            :key="color"
            :color="color"
            text
            underline
            href="https://google.com"
          >
            {{ color }}
          </v-btn>
        </div>
      </div>

      <div class="space-x-2 space-y-2">
        <h2 class="font-bold mb-2">Nuxt Link</h2>
        <div class="flex gap-2 flex-wrap">
          <v-btn
            v-for="color in colors"
            :key="color"
            :color="color"
            text
            underline
            :to="{ path: color }"
          >
            {{ color }}
          </v-btn>
        </div>
      </div>

      <div class="space-x-2 space-y-2">
        <h2 class="font-bold mb-2">Icon</h2>
        <div class="space-y-2" v-for="variant in iconVariants" :key="variant">
          <div v-for="size in sizes" :key="size" class="space-x-2 space-y-2">
            <v-btn
              v-for="color in colors"
              :key="color"
              :color="color"
              :size="size"
              icon
              v-bind="bindVariant(variant)"
            >
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
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
