<script setup lang="ts">
</script>

<template>
  <footer>
    <div
      class="container text-center md:text-left px-4 py-5 mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center"
    >
      <NuxtLink
        to="/"
        class="font-semibold text-lg"
      >
        {{ $t("app_name") }}
      </NuxtLink>
      <div class="text-sm text-gray-600">
        <span class="font-medium text-gray-800">{{ $t("app_name") }}</span>
        by
        <a
          href="https://github.com/gravitano"
          class="font-medium hover:underline text-gray-800"
        >
          Warsono
        </a>. All rights reserved.
      </div>
    </div>
  </footer>
</template>
