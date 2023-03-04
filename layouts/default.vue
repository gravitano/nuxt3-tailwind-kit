<template>
  <div class="flex flex-col min-h-screen">
    <LandingHeader hide-hero />
    <div class="flex-1 container mx-auto z-0 px-4 py-6 lg:px-0">
      <slot />
    </div>
    <LandingFooter />
  </div>
</template>
