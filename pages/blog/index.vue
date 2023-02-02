<script setup lang="ts">
import type { Post } from '~~/types'

const { data, pending, error } = useLazyFetch<{
  posts: Post[]
}>('https://dummyjson.com/posts')
</script>

<template>
  <div>
    <h1 class="text-3xl mb-2 mt-2 font-semibold">
      Blog
    </h1>
    <h2 class="text-lg mb-8 font-normal text-gray-600 dark:text-gray-400">
      Latest Posts
    </h2>

    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="i in 12" :key="i" class="bg-gray-300 h-56 animate-pulse rounded-lg" />
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <BlogPostItem v-for="post in data?.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
