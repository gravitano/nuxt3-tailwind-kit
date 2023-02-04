<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'

defineProps<{
  navigation: {
    name: string
    href: string
  }[]
}>()

const mobileMenu = useMobileMenu()
</script>

<template>
  <nav class="flex items-center justify-between" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenu = true">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm font-semibold leading-6 text-gray-900">
        {{ item.name }}
      </NuxtLink>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <NuxtLink to="/auth/login" class="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </nav>
</template>
