<script setup lang="ts">
import type { Post } from "~/types";
import type { Strapi4Response } from "@nuxtjs/strapi";

const client = useStrapiClient();

const route = useRoute();
const slug = route.params.slug;

const response = await client<Strapi4Response<Post>>(`/posts/slug/${slug}`, {
  method: "GET",
});

const post = response.data;
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">{{ post.attributes.title }}</h1>
    <div class="text-sm dark:text-gray-500 text-gray-500 mb-4">
      <span class="font-semibold">Author</span>
      &middot;
      {{ new Date(post.attributes.publishedAt).toDateString() }}
    </div>
    <BlogPostImage
      :image="post.attributes.image"
      :alt="post.attributes.title"
      class="rounded mb-5"
    />
    <article v-html="post.attributes.content"></article>
  </div>
</template>

<style scoped></style>
