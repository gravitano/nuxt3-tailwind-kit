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
        <HeroSection
          :title="`Slide ${i}`"
          description="Lorem ipsum"
          :image="`https://picsum.photos/1920/1080?random=${i}`"
          :button="{ text: 'Get Started', action: '#' }"
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
        <HomeQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
      </SwiperSlide>
    </Swiper>

    <div class="custom-swiper relative mt-10 bg-blue-50">
      <button
        class="swiper-btn-prev btn btn-icon shadow-md btn-primary rounded-full z-10 absolute top-1/2 -left-5 transform -translate-y-1/2"
      >
        <Icon class="w-5 h-5" name="heroicons:chevron-left-20-solid" />
      </button>
      <button
        class="swiper-btn-next btn btn-icon shadow-md btn-primary rounded-full z-10 absolute top-1/2 -right-5 transform -translate-y-1/2"
      >
        <Icon class="w-5 h-5" name="heroicons:chevron-right-20-solid" />
      </button>

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
          <HomeQuote
            class="text-center"
            :title="`Quote ${i}`"
            description="Lorem ipsum"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
