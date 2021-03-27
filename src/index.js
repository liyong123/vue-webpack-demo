import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import i18n from '@/lang'
import '@/assets/css/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    render: h => h(App)
})
