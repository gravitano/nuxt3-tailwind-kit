<script lang="ts" setup></script>

<template>
  <div class="flex flex-col sm:flex-row sm:h-screen">
    <div class="w-full sm:w-6/12 lg:5/12 p-6 bg-white">
      <NuxtPage />
    </div>
    <div
      class="w-full sm:w-6/12 lg:7/12 bg-gradient-to-tr from-indigo-500 to-indigo-400 flex items-center justify-center p-6"
    >
      <LoginIllustration />
    </div>
  </div>
</template>

<style scoped></style>
