<script lang="ts" setup>
import RiUserLine from '~icons/ri/user-line';
import RiBook2Line from '~icons/ri/book2-line';
import RiChat2Line from '~icons/ri/chat2-line';
import RiBarChartBoxLine from '~icons/ri/bar-chart-box-line';

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
});

const stats = ref([
  {
    text: 'Users',
    count: '100',
    icon: markRaw(RiUserLine),
    color: 'bg-indigo-500',
  },
  {
    text: 'Posts',
    count: '20',
    icon: markRaw(RiBook2Line),
    color: 'bg-blue-500',
  },
  {
    text: 'Comments',
    count: '500',
    icon: markRaw(RiChat2Line),
    color: 'bg-orange-500',
  },
  {
    text: 'Views',
    count: '12000',
    icon: markRaw(RiBarChartBoxLine),
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
    <Card title="Hello World">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit esse
      voluptatem et deserunt earum explicabo aut quis laboriosam nostrum
      quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae fugit!
    </Card>
  </div>
</template>

<style scoped>
</style>
