<template>
  <swiper
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
    <swiper-slide v-for="(item, index) in banner.list" :key="index">
      <img class="img_box" :src="item.image" />
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay, Controller } from "swiper";
import { getHomeMultidata } from "../../network/home";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      banner: [],
    };
  },
  created() {
    getHomeMultidata().then((data) => {
      // console.log(data);
      this.banner = data.data.banner;
    });
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
  },
};
</script>

<style scoped>
.img_box {
  width: 100%;
  
}
@import "./style.css";
</style>
