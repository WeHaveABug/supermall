<template>
  <!-- 父组件 -->
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>

    <!-- 狸猫换太子，脱离better-scroll插件，以实现吸附效果 -->
    <tab-control
    :titles="titles"
    @tabClick = 'tabClick'
    ref="tabControl1"
    class="tabFixed"
    v-show="isTabFixed"
    />

    <scroll class="content" 
    ref="scroll" 
    :probeType="3" 
    @scroll="contentScroll"
    :pullUpLoad="true"
    @pullingUp="Loadmore"
    >
    <!-- 轮播图 -->
    <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
    <!-- 推荐组件 -->
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control
    v-show="!isTabFixed"
    :titles="titles"
    @tabClick = 'tabClick'
    ref="tabControl"
    />
    <goods-list :goods="showGoods"/>
    </scroll>

    <!-- 这个是上拉至顶部的一个条条 -->
    <back-top @click="backTop" v-show="isshow"/>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { 
  getHomeMultidata,
  getHomeGoods } 
  from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles:['流行', '新款', '精选'],
      goods: {
        pop:{page:0, list:[]},
        new:{page:0, list:[]},
        sell:{page:0, list:[]}
        },
        currentType: 'pop',
        isshow: false,
        tabOffsetTop: 0,
        isTabFixed: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    // this.$refs.scroll.refresh()
    // 这里有涉及到一个防抖的知识点，代码见util.js
    // console.log(this.$refs.tabControl.$el.offsetTop); 71
  },
  methods: {

    // 监听事件相关的方法封装
    tabClick(index) {
      
      switch (index) {
            case 0:
              this.currentType = 'pop'
              break;
            case 1:
              this.currentType = 'new'
              break;
            case 2:
              this.currentType = 'sell'
              break;
    }
    this.$refs.tabControl.currentIndex = index
    this.$refs.tabControl1.currentIndex = index
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isshow = position.y < -1000
      // 决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop - 44
    },
    Loadmore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop); 677
    },
    // 网络相关的方法封装
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
      // console.log(res);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1;

    })
    }
    
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px;
  position: relative; */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right:0;
  top: 0; 
  z-index: 10;  */
  overflow: hidden;
  max-width: 740px;
  margin: 0 auto;
  
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  max-width: 740px;
  margin: 0 auto;
}

.tabFixed{
  position: relative;
  z-index: 9;
}
</style>
