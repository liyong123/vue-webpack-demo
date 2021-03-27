/* axios统一配置封装 */
import axios from 'axios'
import router from '../router'

/* 跳转登录页 */
const toLogin = () => {
    router.push({
        path: '/login'
    })
}

/* 异常处理 */
const errorHandle = (status) => {
    switch (status) {
    case 400:
        console.log('信息校验失败')
        break
    case 401:
        toLogin()
        console.log('认证失败')
        break
    case 403:
        toLogin()
        /* token过时了
            清除token */
        localStorage.removeItem('token')
        console.log('token校验失败')
        break
    case 404:
        console.log('请求的资源不存在')
        break
        /* 还有其他情况 ... */
    default:
        console.log('other error')
        break
    }
}
/* 创建axios实例 */
const service = axios.create({timeout: 3000})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 发送给后端的格式
/* service.defaults.headers.common['Authorization'] = localStorage.getItem('token') */

/* axios请求的拦截，对请求对象转化 */
// service.interceptors.request.use(config => { //use接收两个函数
//    console.log(config)
//    /* 如果是post请求，则要对请求的data对象进行qs转化 */
//    if (config.method === 'post') {
//        config.data = qs.stringify(config.data)
//    }
//    return config
// }, error => {
//    return Promise.reject(error)
// })

/* axios响应的拦截 */
service.interceptors.response.use(response => {
    /* 请求成功 */
    /* if(response.status === 200) {
       return Promise.resolve(response)
   } else {
       return Promise.reject(response)
   } */
    if (response.data.code) {
        if (response.data.code === 0) {
            return response
        } else {
            /* 提示 */
        }
    } else {
        return response
    }
}, error => {
    /* 请求失败 */
    const {response} = error
    if (response) {
        errorHandle(response.status)
    } else {
        console.log('net error')
    }
    return Promise.reject(response)
})

const request = (params) => {
    return new Promise((resolve, reject) => {
        service(params).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export default request
