<script setup lang="ts">
definePageMeta({
  layout: 'docs',
})
</script>

<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div class="min-h-[400px] grid place-items-center">
          <div class="text-center p-10">
            <h3 class="text-2xl font-bold mb-2">
              404
            </h3>
            <p class="text-sm text-gray-600 mb-6">
              Document or page not found
            </p>
            <VButton href="/" size="sm" text color="primary">
              Back to home
            </VButton>
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
