// import Vue from 'vue'
import Router, { createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalReplace = Router.prototype.replace
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err)
// }

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
// Vue.use(Router)

// 2.创建路由对象并导出
const routes = [
  {
    path: '',

    redirect: '/home'
  },
  {
    path: '/home',

    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
