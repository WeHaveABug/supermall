<template>
   <swiper
    class="detail-swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :autoplay="true"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
   <swiper-slide v-for="(item, index) in topImages" :key="index">
      <img class="imgBox" :src="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, A11y, Autoplay, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
    name: "DetailSwiper",
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay, Controller],
    };
    }
}
</script>

<style scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden
}
.imgBox {
  width: 100%;
  
}
@import "./style.css";
</style>