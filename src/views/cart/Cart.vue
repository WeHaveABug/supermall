<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>我的购物车({{ cartLength }})</div>
      </template>
      <template v-slot:right>
        <div @click="modify">
          {{ modifition }}
        </div>
      </template>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list v-show="$store.state.cartList.length ? true : false" />

    <!-- 底部汇总 -->
    <cart-bottom-bar
      :operation="operation"
      @showLoading="showLoading"
      v-show="$store.state.cartList.length ? true : false"
    />
    <div class="null-cart" v-show="$store.state.cartList.length ? false : true">
      <img src="~assets/img/cart/gouwu.png" alt="" />
      <span>购物车还是空的，快去逛逛吧</span>
    </div>
    <div class="loading" v-show="loading">
      <img src="~assets/img/cart/loadding.gif" />
      <span>等待支付...</span>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
    modifition() {
      return this.operation ? "管理" : "完成";
    },
  },
  data() {
    return {
      operation: true,
      loading: false,
    };
  },
  methods: {
    modify() {
      this.operation = !this.operation;
    },
    showLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.null-cart {
  display: flex;
  text-align: center;
  flex-direction: column;
}
.null-cart img {
  width: 50%;
  height: 50%;
  margin-left: 50%;
  margin-top: 20%;
  transform: translate(-50%);
  margin-bottom: 10px;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -50px;
}
.loading img {
  width: 50px;
  height: 50px;
  margin-bottom: 3px;
}
</style>
