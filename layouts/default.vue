<template>
  <div class="flex flex-col min-h-screen">
    <HomeHeader hide-hero />
    <div class="flex-1 container mx-auto z-10">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
