<script setup lang="ts">
import type { Post } from '~/types'

defineProps<{
  post: Post
}>()

const users = [
  'John Doe',
  'Jane Doe',
  'John Smith',
  'Jane Smith',
  'Amanda Doe',
  'Ame Smith',
  'Joe Doe',
]

const author = users[Math.floor(Math.random() * users.length)]

const publishedAt = new Date(
  Math.floor(Math.random() * (Date.now() - 1000000000)) + 1000000000,
)

const minutesRead = Math.floor(Math.random() * 10) + 1
</script>

<template>
  <NuxtLink
    class="bg-white flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    :to="`/blog/posts/${post.id}`"
    :title="post.title"
  >
    <BlogPostImage
      :src="`https://source.unsplash.com/random?${post.tags.join(',')}`"
      height="150"
      width="100%"
      class="h-[150px] w-full object-cover bg-gray-100"
    />
    <div class="px-4 py-4 flex flex-col flex-1">
      <span class="font-semibold text-blue-600 text-sm">
        {{ post.tags[0] }}
      </span>
      <h3 class="font-semibold text-lg mt-2 text-gray-800">
        {{ post.title }}
      </h3>
      <div class="text-gray-500 text-sm mt-2 flex-1 line-clamp-3">
        {{ post.body.substr(0, 150) }}
      </div>
      <div class="flex gap-3 items-center mt-6">
        <img
          loading="lazy"
          :src="`https://source.unsplash.com/random/40x40/?person&sig=${post.id}`"
          class="max-w-full rounded-full"
          width="40"
          height="40"
        >
        <div class="space-y-0.5">
          <div class="font-medium text-sm">
            {{ author }}
          </div>
          <div class="text-xs text-gray-500">
            {{ postDate(publishedAt) }} &middot; {{ minutesRead }} mins read
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
