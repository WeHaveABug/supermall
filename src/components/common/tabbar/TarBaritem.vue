<template>
  <div class="tar-baritem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>

export default ({
    name: "TarBaritem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'coral'
      }
    },
    data () {
      return {
        // isActive: false
      }
    },
    computed: {
      // 判断是否被激活
      isActive() {
        return this.$route.path.indexOf(this.path) == -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} :{}
      }
    },
    methods: {
      // 点击切换对应的路由
      itemClick() {
        this.$router.replace(this.path)
      }
    }
})
</script>

<style scoped>
  /* .tar-baritem{
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
      color: black;
    }
  #tar-baritem img{
        height: 24px;
        width: 24px;
        margin: 4px 0 2px 0;
        vertical-align: middle;
    }
  #actived{
      color: coral;
      font-weight: bolder;
    } */
</style>
