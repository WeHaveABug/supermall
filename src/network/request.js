import axios from 'axios'
// 为了方便导出更多实例，使用export function, 而不是export default
export function request(config) {
    // return new Promise((resolve, reject) => {
    // 先创建axios的实例(不要使用全局axios配置)
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {
        //拦截后需要将拦截下来的请求数据返回发送
        return config;
    }, err => {

    })

    // 相应拦截器
    instance.interceptors.response.use(res => {
        // 拦截后需要将拦截下来处理成的结果返回
        return res.data
    }, err => {
        console.log(err)
    })

    // 发送真正的网络请求
    return instance(config) //这里下面不需要再包装了，因为源码中就是promise
    // .then(res => {
    //     resolve(res)
    // })
    // .catch(err => {
    //     reject(err)
    // })
    // })



}