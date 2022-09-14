<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const stats = ref([
  {
    text: 'Users',
    count: '100',
    icon: 'ri:user-line',
    color: 'bg-indigo-500',
  },
  {
    text: 'Posts',
    count: '20',
    icon: 'ri:book-2-line',
    color: 'bg-blue-500',
  },
  {
    text: 'Comments',
    count: '500',
    icon: 'ri:message-line',
    color: 'bg-orange-500',
  },
  {
    text: 'Views',
    count: '12000',
    icon: 'ri:line-chart-line',
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
      <DashboardStatsItem
        v-for="stat in stats"
        :key="stat.text"
        v-bind="stat"
      />
    </div>

    <!-- card -->
    <Card title="Hello World">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit esse
      voluptatem et deserunt earum explicabo aut quis laboriosam nostrum
      quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae fugit!
    </Card>
  </div>
</template>
