// import Vue from 'vue'
import App from './App'
import router from './router'
import { createApp } from 'vue'


const app = createApp(App)
app.use(router).mount('#app')

// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App),
// })

