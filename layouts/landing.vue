<template>
  <div class="flex flex-col min-h-screen">
    <HomeHeader />
    <div class="flex-1">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
