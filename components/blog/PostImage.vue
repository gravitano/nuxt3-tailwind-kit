<script setup lang="ts">
const props = defineProps<{
  image: Record<string, any>;
  alt?: string;
}>();

const config = useRuntimeConfig();

const imageUrl = (image: any) => {
  return config.strapi.url + image.data.attributes.url;
};
</script>

<template>
  <img :src="imageUrl(image)" :alt="alt" />
</template>

<style scoped></style>
