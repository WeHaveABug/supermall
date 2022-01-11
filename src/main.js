// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.use(router)
    .use(store)
    .use(toast)
    .use(VueLazyLoad, {// 使用懒加载的插件
        loading: require('./assets/img/common/placeholder.png')
    })
    .mount('#app')

// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App),
// })

