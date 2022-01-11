<template>
    <div class="cart_list">
        <scroll ref="scroll" :probeType="3" class="cart_scroll">
          
            <cart-list-item
             v-for="(item, index) in cartList"
             :key="index"
             :item-info="item"
             >
             </cart-list-item> 
          
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from "./CartListItem"

export default {
    name: "CartList",
    components: {
        Scroll,
        CartListItem
    },
    data () {
        return {}
    },
    computed: {
        cartList() {
        return this.$store.state.cartList
        }
    }
    // activated () {
    //     this.$refs.scroll.refresh()
    // }
}
</script>

<style scoped>

.cart_list {
  font-size: 0.68rem;
  height: calc(100vh - 1.9rem - 2.09rem - 1.9rem);
}
/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>