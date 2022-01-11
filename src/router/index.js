// import Vue from 'vue'
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
const Detail = () => import('../views/detail/Detail')
const Login = () => import("../views/profile/childComps/Login");

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

    component: Home
  },
  {
    path: '/cart',

    component: Cart
  },
  {
    path: '/category',

    component: Category
  },
  {
    path: '/profile',

    component: Profile
  },
  {
    path: '/detail/:iid',
    // 不要手贱，拼接的格式要把握好啊！！！
    component: Detail,

    meta: {
      keepAlive: true
    }
  },
  {
    path: "/login",
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
