<script lang="ts" setup>
import IconMenu from '~icons/ri/menu-line';
import IconSearch from '~icons/ri/search-line';
import IconUser from '~icons/ri/user-line';
import IconArrowDown from '~icons/ri/arrow-down-s-line';

const emit = defineEmits(['menu:click']);
</script>

<template>
  <header class="bg-white border-b border-gray-200">
    <div class="pr-6 pl-3 py-3 flex gap-2 items-center justify-between">
      <button
        @click="$emit('menu:click')"
        class="flex-shrink-0 px-4 py-2 rounded inline sm:hidden"
      >
        <icon-menu class="w-5 h-5" />
      </button>

      <div class="relative sm:w-3/12">
        <icon-search
          class="i-ri-search-line text-gray-400 absolute left-3 w-5 h-5 top-2.5"
        />
        <input
          type="search"
          placeholder="Search"
          class="pl-10 py-2 appearance-none border-none focus:border-none focus:ring-0 rounded-lg focus:outline-none w-full"
        />
      </div>

      <div class="space-x-0">
        <nuxt-link
          class="text-gray-600 hover:bg-indigo-500 hover:text-white px-3 py-2 rounded flex items-center gap-2"
          to="/"
        >
          <icon-user class="i-ri-user-line w-5 h-5" />
          <span class="hidden sm:inline">Admin</span>
          <icon-arrow-down class="i-ri-arrow-down-s-line w-5 h-5" />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
