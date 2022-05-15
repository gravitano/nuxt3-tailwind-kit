<script setup lang="ts">
import { Post } from '~/types';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <NuxtLink
    v-if="post.attributes"
    class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    :to="`/blog/posts/${post.attributes.slug}`"
  >
    <BlogPostImage :image="post.attributes.image" />
    <div class="px-4 py-4">
      <span class="font-semibold text-blue-600 text-sm">Article</span>
      <h3 class="font-semibold text-lg mt-2 text-gray-800">
        {{ post.attributes.title }}
      </h3>
      <p class="text-gray-500 text-sm mt-2">
        {{ post.attributes.excerpt || post.attributes.content.substr(0, 150) }}
      </p>
      <div class="flex gap-2 items-center mt-6">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          class="max-w-full rounded-full"
          width="40"
          height="40"
        />
        <div class="space-y-0.5">
          <div class="font-medium text-sm">Author Name</div>
          <div class="text-xs text-gray-500">
            {{ new Date(post.attributes.publishedAt).toDateString() }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
