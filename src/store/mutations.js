import { ADD_CARTCOUNT, ADD_CARTLIST } from "./mutations_type"

export default {
    [ADD_CARTCOUNT](state, oldProduct) {
        oldProduct.count += 1;
    },
    [ADD_CARTLIST](state, payload) {
        payload.checked = true
        state.cartList.push(payload);
    }
}