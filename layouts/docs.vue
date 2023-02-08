<script setup lang="ts">
const menus = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        path: '/getting-started/installation',
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Autocomplete',
        path: '/components/autocomplete',
      },
      {
        title: 'Menus',
        path: '/components/menus',
      },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HomeHeader hide-hero />
    <div class="flex-1 container mx-auto z-0 flex gap-6">
      <div class="px-4 py-6 w-[280px] min-h-screen overflow-y-auto">
        <ul class="space-y-3">
          <template v-for="item in menus" :key="item.id">
            <li>
              <p class="text-gray-900 text-sm font-medium py-2">
                {{ item.title }}
              </p>
              <ul class="ml-1">
                <li v-for="child in item.items" :key="child.title">
                  <NuxtLink
                    class="px-5 py-1.5 block text-gray-600 border-l border-l-gray-300 hover:border-l-gray-500 text-sm" :to="child.path"
                    exact-active-class="border-l-gray-500 !text-gray-900 font-medium"
                  >
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </div>
      <div class="flex-1 py-8 prose">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
