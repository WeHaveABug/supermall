<template>
  <tar-bar>
    <!-- @click="itemClick" -->
    <!-- 在dom中使用别名，需要使用~符号 -->
    <tar-baritem path="/home">
      <template v-slot:item-icon
        ><img src="~assets/img/tarbar/home.svg" alt=""
      /></template>
      <template v-slot:item-icon-active
        ><img src="~assets/img/tarbar/home_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>首页</div></template>
    </tar-baritem>
    <tar-baritem path="/category">
      <template v-slot:item-icon
        ><img src="~assets/img/tarbar/category.svg" alt=""
      /></template>
      <template v-slot:item-icon-active
        ><img src="~assets/img/tarbar/category_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>分类</div></template>
    </tar-baritem>
    <tar-baritem path="/cart">
      <template v-slot:item-icon
        ><img src="~assets/img/tarbar/cart.svg" alt=""
      /></template>
      <template v-slot:item-icon-active
        ><img src="~assets/img/tarbar/cart_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>购物车</div></template>
    </tar-baritem>
    <tar-baritem path="/profile">
      <template v-slot:item-icon
        ><img src="~assets/img/tarbar/mine.svg" alt=""
      /></template>
      <template v-slot:item-icon-active
        ><img src="~assets/img/tarbar/mine_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>我的</div></template>
    </tar-baritem>
  </tar-bar>
</template>

<script>
import TarBar from "components/common/tabbar/TarBar";
import TarBaritem from "components/common/tabbar/TarBaritem";
export default {
  name: "MainTarBar",
  components: {
    TarBar,
    TarBaritem,
  },
};
</script>

<style scoped>
.tar-baritem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: black;
}
.tar-baritem img {
  height: 24px;
  width: 24px;
  margin: 4px 0 2px 0;
  vertical-align: middle;
}
.actived {
  color: coral;
  font-weight: bolder;
}
</style>
