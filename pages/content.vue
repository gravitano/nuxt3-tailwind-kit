<script setup>
const { path } = useRoute();
const { data: document } = await useAsyncData('home', () => {
  return queryContent(path).findOne();
});
</script>

<template>
  <div class="prose prose-lg">
    <Content :key="$route.path" :document="document" />
  </div>
</template>
