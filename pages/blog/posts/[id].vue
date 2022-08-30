<script setup lang="ts">
import type { Post } from '~/types';
import type { Strapi4Response } from '@nuxtjs/strapi';

const { findOne } = useStrapi4();

const route = useRoute();
const id = String(route.params.id);

const response = await findOne<Strapi4Response<Post>>('articles', id, {
  populate: ['image']
});
const post = response.data;

useHead({
  title: post.attributes.title,
  meta: [
    {
      name: 'description',
      content: post.attributes.body.substr(300)
    },
    {
      name: 'og:image',
      content: getStrapiUrl(post.attributes.image)
    }
  ]
})
</script>

<template>
  <div class="mx-auto py-4">
    <div class="text-center mb-10">
      <h1 class="text-4xl text-blue-600 font-bold mb-3">
        {{ post.attributes.title }}
      </h1>
      <div class="text-sm dark:text-gray-500 text-gray-500">
        <span class="font-semibold"> Author </span>
        &middot;
        {{ new Date(post.attributes.publishedAt).toDateString() }}
      </div>
    </div>

    <BlogPostImage
      :image="post.attributes.image"
      :alt="post.attributes.title"
      class="rounded mb-8"
    />

    <article
      class="prose prose-blue dark:prose-invert max-w-full"
      v-html="post.attributes.body"
    ></article>
  </div>
</template>
