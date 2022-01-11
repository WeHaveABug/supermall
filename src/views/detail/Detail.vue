<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav" />
    <scroll
      class="detail-content"
      ref="scroll"
      :probeType="3"
      :observeImage="true"
      :observeDOM="true"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @loadImg="loadImg" />
      <detail-param-info ref="params" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :comment="comment" />
      <goods-list ref="recommend" :goods="recommends" />
      <transition class="back-top">
        <back-top @click.native="backTop" v-show="isshow" />
      </transition>
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <!-- <toast :message="message" :isShow="isShow" /> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import Toast from "components/common/toast/Toast.vue";
import GoodsList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";
// import {backTopMinxin} from 'common/mixin'

// 路由相关
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getReCommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    GoodsList,
    Scroll,
    Toast,
    BackTop,
  },
  // mixins: [backTopMinxin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      getThemeTopy: null,
      isshow: false,
    };
  },
  created() {
    // console.log(this.$route.params);
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 2.1 获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.2 把几个复杂的数据整合在一起
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 2.3 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 2.4 保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 2.5 获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 2.6 获取商品评论信息
      if (data.rate.cRate !== 0) {
        this.comment = data.rate.list[0];
      } // 如果获取的评论不为空

      this.$nextTick(() => {
        // Dom已经渲染出来了，然而图片还是没有被加载完毕,目前获取到的offsetTop是不包含图片的
        // 一般来说，offseTop的值不对都是因为图片的问题
      });
    });

    // 3.请求商品下方的推荐数据
    getReCommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });

    // 4.给getThemeTopY赋值
    this.getThemeTopy = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    }, 200);
  },
  methods: {
    loadImg() {
      // this.$refs.scroll && this.$refs.scroll.refresh()
      this.getThemeTopy();
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
      // this.$refs.scroll.scrollToElement(this.$refs[this.theme[index]].$el, 200)
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;

      // 2.positionY与主题的值进行对比
      const length = this.themeTopYs.length;

      for (let i = 0; i < length - 1; i++) {
        // if(this.currentIndex !== i
        // && ((i < length - 1 && positionY >= this.themeTopYs[i]   //内容滚动显示正确的标题
        // && positionY < this.themeTopYs[i+1]
        // || (i === length -1
        // && positionY >= this.themeTopYs[i]))))
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
          this.currentIndex = 0;
        }
        // 注：以上条件一防止频繁赋值，条件二判断i在0和length-1之间，条件三判断i大于length-1
      }
      // 确定backtop是否显示
      this.isshow = -position.y > 800;
      // 2021.12.5该条件(mixin))在判断返回顶部是否显示时失效，未解决
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    addCart() {
      // 获取购物车需要展示的信息
      const item = {
        iid: this.iid,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        title: this.goods.title,
        image: this.topImages[0],
        count: 1,
        shopName: this.shop.name,
      };
      // 将商品添加到购物车中(使用vuex)
      this.$store
        .dispatch("addCart", item)
        .then(() => {
          // console.log(res);
          this.$toast.show("加入购物车成功！");
        })
        .catch(() => {
          this.$toast.show("购买数量+1");
        });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  /* overflow: hidden; */
}
.detail-nav {
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99;
  background-color: #fff;
}
/* .detail-content {
     height: calc(100% - 44px);
 } */

.detail-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/**
* 给回到顶部按钮做了一个过渡效果
*/
/* .back-top{
  bottom: 90px;
  right: 15px;
}
.back-top-enter,
.back-top-leave-to {
  transform: translateX(1rem);
  opacity: 0;
}
.back-top-enter-active {
  transition: all 1s;
}
.back-top-leave-active {
  transition: all 1s;
} */
</style>