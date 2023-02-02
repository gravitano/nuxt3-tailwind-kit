<script setup lang="ts">
import type { Post } from '~~/types'

const route = useRoute()
const { data: post, pending, error } = useLazyFetch<Post>(`https://dummyjson.com/posts/${route.params.id}`)
</script>

<template>
  <div v-if="pending">
    <div v-for="i in 12" :key="i" class="bg-gray-300 h-5 mb-2 animate-pulse rounded-lg" />
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="post" class="mx-auto py-4">
    <div class="text-center mb-10">
      <h1 class="text-4xl text-blue-600 font-bold mb-3">
        {{ post.title }}
      </h1>
      <div class="text-sm dark:text-gray-500 text-gray-500">
        <span class="font-semibold"> Author </span>
        &middot;
        Reactions: {{ post.reactions }}
      </div>
    </div>

    <BlogPostImage
      v-if="post.image"
      :image="post.image"
      :alt="post.title"
      class="rounded mb-8"
    />

    <article
      class="prose prose-blue dark:prose-invert max-w-full"
      v-html="post.body"
    />
  </div>
</template>
