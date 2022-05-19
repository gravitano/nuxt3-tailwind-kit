<script setup>
const { data } = await useFetch('/api/store/products', {});
const products = data.value.products;
const header = data.value.header;
</script>

<template>
  <div class="">
    <div class="mt-5 mb-10 text-center space-y-1 sm:max-w-3xl mx-auto">
      <h1 class="text-3xl font-semibold text-gray-900">
        {{ header.title }}
      </h1>
      <p class="text-gray-500">
        {{ header.description }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/store/${product.id}`"
        class="group px-4 py-2 rounded-lg overflow-hidden shadow-md"
      >
        <div
          class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          {{ product.name }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ product.price }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
