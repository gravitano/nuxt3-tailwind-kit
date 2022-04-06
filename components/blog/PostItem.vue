<script setup lang="ts">
import { Post } from '~/types';

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <nuxt-link
    v-if="post.attributes"
    class="mb-2 -mx-2 dark:hover:bg-gray-800 hover:bg-gray-100 p-2 rounded flex flex-col sm:flex-row gap-2 w-full"
    :to="`/blog/posts/${post.attributes.slug}`"
  >
    <div class="flex-grow order-2 sm:order-1">
      <h3
        class="dark:text-gray-200 font-semibold text-2xl text-gray-800 mb-2 sm:mb-1"
      >
        {{ post.attributes.title }}
      </h3>
      <div class="text-xs dark:text-gray-500 text-gray-500 mb-2">
        <span class="font-semibold">Author</span>
        &middot; {{ new Date(post.attributes.publishedAt).toDateString() }}
      </div>
      <div class="text-sm dark:text-gray-400 text-gray-600">
        {{ post.attributes.excerpt || post.attributes.content.substr(0, 150) }}
      </div>
    </div>
    <blog-post-image
      :image="post.attributes.image"
      :alt="post.attributes.title"
      class="w-full sm:w-4/12 object-cover rounded order-1 sm:order-2 flex-shrink-0"
    />
  </nuxt-link>
</template>

<style scoped></style>
