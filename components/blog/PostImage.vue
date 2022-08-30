<script setup lang="ts">
import { Image } from '~~/types';

defineProps<{
  image: Image;
  alt?: string;
}>();
</script>

<template>
  <img :src="getStrapiUrl(image)" :alt="alt" />
</template>

