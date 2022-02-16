<script setup lang="ts">
import type { Post } from "~/types";
import type { Strapi4Response } from "@nuxtjs/strapi";

const { find } = useStrapi4();

const posts = useState<Post[]>([]);
try {
  const response = await find<Strapi4Response<Post>>("posts", {
    sort: "publishedAt",
    populate: ["image", "author"],
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

    <nuxt-link
      class="mb-2 -mx-2 dark:hover:bg-gray-800 hover:bg-gray-100 p-2 rounded flex gap-2 w-full"
      :to="`/blog/posts/${post.attributes.slug}`"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="flex-grow">
        <h3 class="dark:text-gray-200 font-semibold text-xl text-gray-800 mb-1">
          {{ post.attributes.title }}
        </h3>
        <div class="text-xs dark:text-gray-500 text-gray-500 mb-1">
          <span class="font-semibold">Author</span>
          &middot; {{ new Date(post.attributes.publishedAt).toDateString() }}
        </div>
        <div class="text-sm dark:text-gray-400 text-gray-700">
          {{ post.attributes.excerpt || post.attributes.content.substr(0, 150) }}
        </div>
      </div>
      <blog-post-image
        :image="post.attributes.image"
        :alt="post.attributes.title"
        class="w-4/12 rounded"
      />
    </nuxt-link>
  </div>
</template>

<style scoped></style>
