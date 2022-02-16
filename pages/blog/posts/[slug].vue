<script setup lang="ts">
import type { Post } from "~/types";
import type { Strapi4Response } from "@nuxtjs/strapi";
import MarkdownIt from "markdown-it";
// import hljs from "highlight.js";
import prism from "markdown-it-prism";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/themes/prism-okaidia.css";

const md = new MarkdownIt({
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return (
  //         '<pre class="hljs"><code>' +
  //         hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
  //         "</code></pre>"
  //       );
  //     } catch (__) {}
  //   }
  //   return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
  // },
});

md.use(prism, {});

const client = useStrapiClient();

const route = useRoute();
const slug = route.params.slug;

const response = await client<Strapi4Response<Post>>(`/posts/slug/${slug}`, {
  method: "GET",
});

const post = response.data;

const contents = useState("");
try {
  contents.value = md.render(post.attributes.content || "");
} catch (e) {
  console.log(e);
}
</script>

<template>
  <div class="max-w-[65ch] mx-auto">
    <h1 class="text-4xl font-bold mb-2">{{ post.attributes.title }}</h1>
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
    <article class="prose dark:prose-invert max-w-none" v-html="contents"></article>
  </div>
</template>

<style>
.code-toolbar {
  @apply relative;
}
.copy-to-clipboard-button {
  @apply transition-all duration-300 bg-gray-700 hover:bg-gray-600 text-gray-100 absolute right-0 top-0 text-xs px-2 py-1.5 rounded;
}
</style>
