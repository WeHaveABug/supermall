import { ADD_CARTCOUNT, ADD_CARTLIST } from "./mutations_type";

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            // 判断oldProduct
            if (oldProduct) {
                context.commit(ADD_CARTCOUNT, oldProduct)
                // resolve('当前商品数量+1')
                reject()
            } else {// 查找之前数组中是否有该商品
                payload.checked = true;
                payload.count = 1
                context.commit(ADD_CARTLIST, payload)
                // resolve('添加了新的商品')
                resolve()
            }
        }
        )
    }
}