<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

definePageMeta({})

const onSwiper = (swiper) => {
  // eslint-disable-next-line no-console
  console.log(swiper)
}

const onSlideChange = () => {
  // eslint-disable-next-line no-console
  console.log('slide change')
}

const modules = [Navigation, Pagination, A11y]
</script>

<template>
  <div>
    <PageHeader title="Swiper" subtitle="Swiper example" />

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      class="relative"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="i in 5" :key="i">
        <LandingQuote
          class="text-center"
          :title="`Quote ${i}`"
          description="Lorem ipsum"
        />
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="i in 5" :key="i">
        <LandingQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
      </SwiperSlide>
    </Swiper>

    <div class="custom-swiper relative mt-10 bg-blue-50">
      <VButton
        size="lg"
        shadow
        class="w-10 !h-10 px-0 py-0 rounded-full swiper-btn-prev z-10 absolute top-1/2 -left-5 transform -translate-y-1/2"
      >
        <Icon class="w-5 h-5" name="heroicons:chevron-left-20-solid" />
      </VButton>
      <VButton
        size="lg"
        shadow
        class="w-10 !h-10 px-0 py-0 rounded-full swiper-btn-next z-10 absolute top-1/2 -right-5 transform -translate-y-1/2"
      >
        <Icon class="w-5 h-5" name="heroicons:chevron-right-20-solid" />
      </VButton>

      <Swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        }"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <LandingQuote
            class="text-center"
            :title="`Quote ${i}`"
            description="Lorem ipsum"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
