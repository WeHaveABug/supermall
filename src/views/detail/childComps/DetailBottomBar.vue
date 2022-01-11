<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="isCollect = !isCollect">
        <i class="icon select" :class="{ collectActive: isCollect }"></i>
        <span class="text" :class="{ textActive: isCollect }">
          {{ collectClick() }}
        </span>
      </div>
      <div @click="cartClick">
        <i class="icon cart"></i>
        <span class="text"
          >购物车<i class="cart-count">{{
            this.$store.state.cartList.length
          }}</i></span
        >
      </div>
      <div class="bar-item bar-right">
        <div class="menu">
          <div class="cart cart-and-buy" @click="addToCart">加入购物车</div>
          <div class="buy cart-and-buy" @click="buyClick">点击购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
    collectClick() {
      return this.isCollect ? "已收藏" : "收藏";
    },
    cartClick() {
      this.$router.push("/cart");
    },
    buyClick() {
      this.$emit("addCart");
      this.$router.push("/cart");
    },
  },
  data() {
    return {
      isCollect: false,
    };
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  background-color: #f6f6f6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  display: flex;
  text-align: center;
  max-width: 740px;
  margin: 0 auto;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  background-size: 100%;
}
.bar-left .collectActive {
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  background-position: 0 -25px;
}
/* 通过雪碧图的位置调整，来进行一个颜色的变换(思路get啊) */
.bar-left .textActive {
  color: var(--color-high-text);
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-left .cart {
  background: url("~assets/img/detail/cart.png") 0 0/100%;
}
.cart-count {
  position: relative;
  top: -45px;
  right: -10px;
  background-color: var(--color-high-text);
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 15px;
}
.bar-right {
  font-size: 13px;
  color: #fff;
  line-height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-and-buy {
  height: 40px;
  width: 88px;
  line-height: 40px;
  font-size: 14px;
  color: white;
  font-weight: 500;
}
.bar-right .cart {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background-image: linear-gradient(to right, #ffc500, #ff9402);
}
.bar-right .buy {
  /* background-color: rgb(255, 66, 32); */
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-image: linear-gradient(to right, #ff7a00, #fe560a);
}
</style>