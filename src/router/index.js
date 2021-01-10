import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    },
]

const router = new VueRouter({
    /*  mode: 'history',  // 这种模式，后端需要做处理，创建项目时，history选择的是yes，如果选择no，路由带#，后端无需配置处理
     base: process.env.BASE_URL, */
     routes
})
router.beforeEach((to, from, next) => {
    /* if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next() */
    next()
})

export default router