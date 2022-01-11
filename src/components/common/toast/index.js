import { createApp } from 'vue';

import Toast from './Toast'
// 2021年挂在自定义组件新用法
const createMount = options => {
    const mountNode = document.createElement('div')
    document.body.appendChild(mountNode)

    const app = createApp(Toast, {
        ...options,
        remove() {
            app.unmount(mountNode)
            document.body.removeChild(mountNode)
        }
    })
    return app.mount(mountNode)
}

const toast = options => {
    return createMount(options)
}

toast.install = app => {
    app.component('Toast', Toast)
    app.config.globalProperties.$toast = new toast()
}

// 以下新版vue不可用，会报错'vue.extend is not a function'
// const obj = {};

// obj.install = function (Vue) {
//     // 创建组件构造器
//     const toastConstructor = Vue.extend(Toast);

//     // 通过构造器创建组件实例
//     const toast = new toastConstructor();

//     // 将实例挂载在元素上，并添加在DOM中
//     toast.$mount(document.createElement("div"));

//     document.body.appendChild(toast.$el);

//     // 给Vue原型添加上挂载后的实例
//     Vue.prototype.$toast = toast;
// }
export default toast;