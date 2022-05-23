<script setup lang="ts">
const isOpen = ref(false);

const menus = ref([
  {
    text: "menu_home",
    to: "/",
  },
  {
    text: "menu_store",
    to: "/store",
  },
  {
    text: "menu_blog",
    to: "/blog",
  },
  {
    text: "menu_dashboard",
    to: "/dashboard",
  },
]);

const langs = ["en", "id"];
</script>

<template>
  <header class="bg-blue-600 text-white py-3 sm:py-5">
    <div
      class="container mx-auto pl-4 pr-2 sm:px-0 flex flex-row items-center gap-4 justify-between"
    >
      <NuxtLink to="/" class="font-bold text-white text-2xl">
        <!-- <img
          loading="lazy"
          src="/logo.svg"
          alt="Logo"
          class="max-w-full h-10"
        /> -->
        {{ $t("app_name") }}
      </NuxtLink>
      <button
        class="appearance-none px-2 py-2 rounded sm:hidden"
        type="button"
        aria-label="Menu"
        @click="isOpen = !isOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        :class="
          isOpen
            ? 'fixed sm:relative top-16 shadow sm:shadow-none left-4 right-4 rounded-lg overflow-hidden bg-white sm:bg-transparent py-2'
            : 'hidden sm:flex sm:w-6/12'
        "
      >
        <nav
          class="flex flex-col sm:relative w-full items-start sm:flex-row sm:justify-end sm:gap-1 sm:items-center"
        >
          <NuxtLink
            v-for="menu in menus"
            :key="menu.text"
            :to="menu.to"
            class="px-4 py-2 rounded-full w-full sm:w-auto text-gray-800 sm:text-white transition duration-200 font-medium hover:bg-white hover:text-blue-600"
            exact-active-class="bg-white !text-blue-600"
          >
            {{ $t(menu.text) }}
          </NuxtLink>

          <div>
            <select
              v-model="$i18n.locale"
              class="text-white text-xs bg-transparent uppercase border border-white rounded bg-none px-2 py-1 focus:ring-0"
            >
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
              </option>
            </select>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
