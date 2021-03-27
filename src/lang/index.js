import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
    en: {
        ...require('@/lang/en.json'),
        ...enLocale
    },
    zh: {
        ...require('@/lang/zh.json'),
        ...zhLocale
    }
}

const locale = top && top.sessionStorage.lang ? top.sessionStorage.lang : 'zh'

const i18n = new VueI18n({
    locale,
    messages
})

export default i18n
