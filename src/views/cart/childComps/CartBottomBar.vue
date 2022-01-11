<template>
  <div class="cart-bottom">
    <div class="check-content">
      <cart-check-button
        class="check-button"
        :is-Checked="isSelectAll"
        @click="CheckClick"
      />
      <span>全选</span>
    </div>
    <div class="bottom-menu" v-show="operation">
      <div class="calc">总计：￥{{ totalPrice | keep2Decimal }}</div>

      <div class="buy" @click="buyClick">
        <span class="submit" :class="{ hide: totalLength === 0 }"
          >结算
          <span>({{ totalLength }})</span>
        </span>
      </div>
    </div>
    <div v-show="!operation" @click="deleteShop">
      <span class="bottom-delete"> 删除 </span>
    </div>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton.vue";
export default {
  components: {
    CartCheckButton,
  },
  props: {
    operation: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    checkedItem() {
      return this.cartList.filter((item, index) => item.checked == true);
    },
    // 当前选中准备结算的商品个数
    totalLength() {
      return this.checkedItem.length;
    },
    totalPrice() {
      return this.checkedItem.reduce(
        (pre, curr) => pre + curr.count * curr.price,
        0
      );
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      } else {
        return this.cartList.every((item) => item.checked);
      }
    },
  },
  methods: {
    keep2Decimal(value) {
      return Math.round(value * 100) / 100;
    },
    CheckClick() {
      let CheckFlag = !this.isSelectAll;
      this.cartList.forEach((item) => (item.checked = CheckFlag));
    },
    buyClick() {
      if (this.totalLength === 0) {
        this.$toast.show("请选择要购买的商品");
      } else {
        //====>功能:购买界面，确认信息
        this.$emit("showLoading");
      }
    },
    deleteShop() {
      this.$store.state.cartList.pop();
    },
  },
};
</script>

<style scoped>
.cart-bottom {
  background-color: #eee;
  position: fixed;
  height: 40px;
  bottom: 50px;
  left: 0;
  right: 0;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 40px;
  max-width: 740px;
  margin: 0 auto;
}

.check-content {
  height: 20px;
  display: flex;
  width: 60th;
  /*  */
  margin-left: 10px;
}

.check-content span {
  padding-left: 40px;
}

.bottom-menu {
  flex: 1;
  display: flex;
}
.bottom-menu .calc {
  flex: 2;
  margin-left: 50px;
  display: flex;
  justify-content: flex-end; /* flex布局中元素向上对齐 */
  align-items: center;
}

.bottom-menu .buy {
  flex: 1;
}

.submit {
  background-image: -webkit-linear-gradient(left, #ff9000 0%, #ff5000 98%);
  background-image: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
  font-size: 15px;
  line-height: 15px;
  padding: 8px 18px;
  text-align: center;
  border-radius: 80px;
  color: #ffffff;
  white-space: nowrap;
  margin-left: 10px;
}

.check-button {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 10px;
  height: 20px;
  width: 20px;
}

.hide {
  color: rgba(255, 255, 255, 0.5);
}

.bottom-delete {
  color: #fc0a0a;
  border: 1px solid #fc0a0a;
  font-size: 15px;
  padding: 6px 15px;
  text-align: center;
  border-radius: 80px;
  white-space: nowrap;
}
</style>