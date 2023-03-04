<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'
import type { NavigationItem } from '~~/types'

defineProps<{
  navigation: NavigationItem[]
}>()

const mobileMenu = useMobileMenu()
</script>

<template>
  <nav class="container mx-auto flex items-center justify-between" aria-label="Global">
    <div class="flex lg:flex-1">
      <Logo />
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenu = true">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <template v-for="item in navigation" :key="item.title">
        <VMenus v-if="item.children" :items="item.children" :title="item.title" :to="item.to" />
        <NuxtLink v-else :to="item.to" class="text-sm font-semibold leading-6 text-gray-900">
          {{ item.title }}
        </NuxtLink>
      </template>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink to="/auth/login" class="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </nav>
</template>
