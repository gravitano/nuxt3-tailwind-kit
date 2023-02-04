<script setup lang="ts">
</script>

<template>
  <footer
    class="px-4 sm:px-0 bg-neutral-800 text-white"
  >
    <div
      class="container py-4 mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center"
    >
      <NuxtLink
        to="/"
        class="font-semibold text-lg text-white"
      >
        {{ $t("app_name") }}
      </NuxtLink>
      <div class="text-sm">
        {{ $t("app_name") }} by
        <a
          href="https://github.com/gravitano"
          class="font-semibold text-white"
        >
          Warsono
        </a>
        . All rights reserved
      </div>
    </div>
  </footer>
</template>
