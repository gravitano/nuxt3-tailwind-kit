<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Dialog, DialogPanel } from '@headlessui/vue'

defineProps<{
  navigation: {
    name: string
    href: string
  }[]
}>()

const mobileMenu = useMobileMenu()
</script>

<template>
  <ClientOnly>
    <Dialog as="div" :open="mobileMenu" @close="mobileMenu = false">
      <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
        <div class="flex items-center justify-between">
          <Logo />
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenu = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation" :key="item.name" :to="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                @click="mobileMenu = false"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
            <div class="py-6">
              <NuxtLink
                to="/auth/login"
                class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                @click="mobileMenu = false"
              >
                Log in
              </NuxtLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>
