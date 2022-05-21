<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

definePageMeta({
  fullWidth: true,
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const modules = [Navigation, Pagination, A11y];
</script>

<template>
  <div>
    <swiper
      :modules="modules"
      navigation
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <HeroSection
          :title="`Slide ${i}`"
          description="Lorem ipsum"
          :image="`https://picsum.photos/1920/1080?random=${i}`"
          :button="{ text: 'Get Started', action: '#' }"
        />
      </swiper-slide>
    </swiper>

    <swiper
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <HomeQuote class="text-center" :title="`Quote ${i}`" description="Lorem ipsum" />
      </swiper-slide>
    </swiper>
  </div>
</template>
