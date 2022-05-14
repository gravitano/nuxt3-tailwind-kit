<script setup lang="ts">
import type { Post } from '~/types';
import type { Strapi4Response } from '@nuxtjs/strapi';

definePageMeta({
  layout: 'blog',
});

const { find } = useStrapi4();

const posts = useState<Post[]>([]);
try {
  const response = await find<Strapi4Response<Post>>('posts', {
    sort: 'publishedAt',
    populate: ['image', 'author'],
  });

  posts.value = response.data;
} catch (e) {
  console.log(e);
}
</script>

<template>
  <div>
    <h1 class="text-3xl mb-1 font-bold">Blog</h1>
    <h2 class="text-xl mb-5 font-normal dark:text-gray-400">Latest Posts</h2>

    <BlogPostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped></style>
