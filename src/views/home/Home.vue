<template>
<!-- 父组件 -->
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>购物街</template>
        </nav-bar>
        <!-- 轮播图 -->
        <home-swiper :banners = "banners"/>
        <!-- 推荐组件 -->
        <recommend-view :recommends = "recommends"/>
    </div>    
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  
  import {getHomeMultidata} from 'network/home';
  


  export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView

        },
        data () {
            return {
               banners: [],
               recommends: [] 
            }
        },
        created () {
            // 请求多个数据
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        }
}
</script>

<style scoped>
    #home {
        /* padding-top: 44px; */
        height: 100vh;
        
        position: relative;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: #fff;
        /* position: fixed;
        left: 0;
        right:0;
        top: 0;
        z-index: 9; */
    }

</style>
