<script lang="ts" setup>
import RiUserLine from '~icons/ri/user-line';
import RiBook2Line from '~icons/ri/book2-line';
import RiChat2Line from '~icons/ri/chat2-line';
import RiBarChartBoxLine from '~icons/ri/bar-chart-box-line';

const stats = ref([
  {
    text: 'Users',
    count: '100',
    icon: RiUserLine,
    color: 'bg-indigo-500',
  },
  {
    text: 'Posts',
    count: '20',
    icon: RiBook2Line,
    color: 'bg-blue-500',
  },
  {
    text: 'Comments',
    count: '500',
    icon: RiChat2Line,
    color: 'bg-orange-500',
  },
  {
    text: 'Views',
    count: '12000',
    icon: RiBarChartBoxLine,
    color: 'bg-emerald-500',
  },
]);
</script>

<template>
  <div>
    <div class="mb-5">
      <nuxt-link class="font-semibold text-2xl" to="/"> Dashboard </nuxt-link>
      <div class="text-gray-500">Overview & summary</div>
    </div>

    <!-- stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 mb-5 gap-5">
      <StatsItem v-for="stat in stats" :key="stat.text" v-bind="stat" />
    </div>

    <!-- card -->
    <div class="border border-gray-200 rounded-lg">
      <h1 class="font-semibold text-lg text-gray-700 px-4 pt-3 pb-2">
        Hello World
      </h1>
      <div class="px-4 pb-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit
        esse voluptatem et deserunt earum explicabo aut quis laboriosam nostrum
        quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae
        fugit!
      </div>
    </div>
  </div>
</template>

<style scoped></style>
