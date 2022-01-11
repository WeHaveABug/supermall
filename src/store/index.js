import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'

const store = createStore({
  state: {
    cartList: []
  },
  mutations,
  // mutations唯一的目的就是修改state中的状态
  // mutation中的每个方法尽可能完成的事件比较单一点
  actions,
})

export default store
