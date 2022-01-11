<template>
  <nav-bar class="detail-nav">
      <template #left>
          <img
          src="~assets/img/common/back.svg"
          @click="backClick"
          class="back"
        />
      </template>
        <!-- <nav-bar><div slot="center">详情页</div></nav-bar>  摒弃这种写法-->
      <template #center>
        <span    
            v-for="(item, index) in titles" 
            :key="index"
            :class="{active: index === currentIndex}"
            @click="itemClick(index)"
            >
            <slot name="center"></slot>
            {{ item }}
        </span>
      </template>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    name: "DetailNavBar",
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('itemClick', index)
            // 把这个自定义的点击事件给发射出去
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    /* .detail-nav {
        
    }
    .detail-title {
        
    } */
    .detail-nav {
        font-size: 14px;
        max-width: 740px;
        margin: 0 auto;
        display: flex;
        
    }
    .detail-nav span{
        padding: 0 20px;
        flex: 1;
    
    }
    .active {
        color: var(--color-high-text);
    }
    .back {
        margin-top: 10px;
    }

</style>