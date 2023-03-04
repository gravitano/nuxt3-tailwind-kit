<script setup lang="ts">
defineProps<{
  features: {
    name: string
    description: string
    image: string
    imagePosition: string
    imageAlt: string
    items: {
      title: string
      description: string
    }[]
    theme?: string
  }[]
}>()
</script>

<template>
  <section
    v-for="feature in features"
    :key="feature.name"
    class="px-4 xl:px-0 py-5 sm:py-20 bg-skin-fill text-skin-base"
    :class="feature.theme"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
        <div
          :class="
            feature.imagePosition === 'right'
              ? 'order-2 sm:order-1'
              : 'order-1 sm:order-2'
          "
        >
          <h2 class="text-3xl font-semibold">
            {{ feature.name }}
          </h2>
          <p class="mt-1 text-lg">
            {{ feature.description }}
          </p>
          <div class="mt-8">
            <div class="space-y-6">
              <div
                v-for="item in feature.items"
                :key="item.title"
                class="flex items-start gap-4"
              >
                <div
                  class="grid h-10 w-10 flex-shrink-0 place-items-center rounded bg-skin-icon-fill text-skin-icon"
                >
                  <!-- Heroicon name: outline/globe-alt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="-mt-1.5 text-lg font-semibold">
                    {{ item.title }}
                  </h3>
                  <p class="">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="
            feature.imagePosition === 'left' ? 'order-2 sm:order-1' : 'order-1 sm:order-2'
          "
        >
          <img
            loading="lazy"
            :src="feature.image"
            :alt="feature.imageAlt"
            class="max-w-full lg:max-w-md mx-auto rounded-lg border"
          >
        </div>
      </div>
    </div>
  </section>
</template>
