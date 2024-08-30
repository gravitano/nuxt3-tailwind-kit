<script setup lang="ts">
const showSidebar = ref(true)
const isMobile = useMediaQuery('(max-width: 640px)')

watchEffect(() => {
  if (isMobile.value)
    showSidebar.value = false

  else
    showSidebar.value = true
})

const onMenuClick = () => {
  if (isMobile.value)
    showSidebar.value = false
}

const docsQuery = queryContent('docs')
</script>

<template>
  <div
    class="lg:px-4 lg:py-6 px-3 shadow-md lg:shadow-none pt-1 pb-3 bg-white lg:bg-transparent lg:w-[280px] lg:min-h-screen overflow-y-auto"
  >
    <div class="sticky lg:hidden top-0 flex items-center justify-between">
      <VButton text @click="showSidebar = !showSidebar">
        <Icon name="ri:menu-2-line" class="w-5 h-5" />
      </VButton>
      <VButton text size="sm" href="#">
        Back to top
      </VButton>
    </div>
    <ContentNavigation :query="docsQuery" v-slot="{ navigation }" class="space-y-3">
      <ul v-if="showSidebar">
        <template v-for="(nav, idx) in navigation" :key="idx">
          <li v-for="link of nav.children" :key="link._path">
            <p class="text-gray-900 text-sm font-medium py-2">
              {{ link.title }}
            </p>
            <ul class="ml-1">
              <li v-for="child in link.children" :key="child.title">
                <NuxtLink
                  class="px-5 py-1.5 block text-gray-600 border-l border-l-gray-300 hover:border-l-gray-500 hover:text-gray-800 text-sm"
                  :to="child._path" exact-active-class="border-l-primary-600 font-medium !text-primary-600" @click="onMenuClick"
                >
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </ContentNavigation>
  </div>
</template>
