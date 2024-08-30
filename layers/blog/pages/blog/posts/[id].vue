<script setup lang="ts">
import type { Post } from '~~/types'

const route = useRoute()
const { data: post, pending, error } = await useLazyFetch<Post>(`https://dummyjson.com/posts/${route.params.id}`)

const author = 'John Doe'
const publishedAt = new Date('2021-01-01')
const readingTime = 5

useHead({
  title: `${post.value?.title} | Blog`,
})
</script>

<template>
  <div v-if="pending" class="py-10">
    <div class="bg-gray-300 h-5 mb-4 animate-pulse rounded-lg max-w-2xl mx-auto" />
    <div class="bg-gray-300 h-3 mb-10 animate-pulse rounded-lg max-w-xs mx-auto" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 6" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-6 animate-pulse rounded-lg max-w-2xl" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 5" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-10 animate-pulse rounded-lg max-w-md" />
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="post" class="mx-auto py-5 lg:py-10 px-6">
    <div class="text-center mb-5 lg:mb-10 max-w-xl mx-auto py-5 lg:py-10">
      <h1 class="text-3xl lg:text-4xl text-blue-600 font-bold mb-5">
        {{ post.title }}
      </h1>
      <div class="text-sm dark:text-gray-500 text-gray-500">
        <span class="font-semibold"> {{ author }} </span>
        &middot;
        {{ postDate(publishedAt) }} &middot; {{ readingTime }} min read
      </div>
    </div>

    <BlogPostImage
      v-if="post.image"
      :src="`https://source.unsplash.com/random?${post.tags.join(',')}`"
      :alt="post.title"
      class="rounded mb-8"
    />

    <article
      class="prose prose-blue dark:prose-invert max-w-full"
      v-html="post.body"
    />
  </div>
</template>
