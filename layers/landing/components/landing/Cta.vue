<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ appConfig.cta.title }}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            {{ appConfig.cta.description }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <template v-for="link in appConfig.cta.links" :key="link.title">
              <NuxtLink v-if="link.type === 'primary'" :to="link.url"
                class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                {{ link.title }}
              </NuxtLink>
              <NuxtLink v-else-if="link.type === 'alt'" :to="link.url"
                class="text-base font-semibold leading-7 text-white">
                {{ link.title }}
                <span v-if="link.arrow" aria-hidden="true">→</span>
              </NuxtLink>
            </template>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            :src="appConfig.cta.image" alt="App screenshot" width="1824" height="1080">
        </div>
      </div>
    </div>
  </div>
</template>
