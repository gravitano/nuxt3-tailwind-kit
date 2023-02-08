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
      {
        title: 'MenusItem',
        path: '/components/menus-item',
      },
    ],
  },
]

const showSidebar = ref(true)
const isMobile = useMediaQuery('(max-width: 640px)')

watchEffect(() => {
  if (isMobile.value) {
    showSidebar.value = false
  } else {
    showSidebar.value = true
  }
})

const onMenuClick = () => {
  if (isMobile.value) {
    showSidebar.value = false
  }
}
</script>

<template>
  <div
    class="lg:px-4 lg:py-6 px-3 shadow-md lg:shadow-none pt-1 pb-3 bg-white lg:bg-transparent lg:w-[280px] lg:min-h-screen overflow-y-auto">
    <div class="sticky lg:hidden top-0 flex items-center justify-between">
      <Button text @click="showSidebar = !showSidebar">
        <Icon name="ri:menu-2-line" class="w-5 h-5" />
      </Button>
      <Button text size="sm" href="#">Back to top</Button>
    </div>
    <ul v-if="showSidebar" class="space-y-3">
      <template v-for="item in menus" :key="item.id">
        <li>
          <p class="text-gray-900 text-sm font-medium py-2">
            {{ item.title }}
          </p>
          <ul class="ml-1">
            <li v-for="child in item.items" :key="child.title">
              <NuxtLink
                class="px-5 py-1.5 block text-gray-600 border-l border-l-gray-300 hover:border-l-gray-500 text-sm"
                :to="child.path" exact-active-class="border-l-gray-500 !text-gray-900 font-medium" @click="onMenuClick">
                {{ child.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>