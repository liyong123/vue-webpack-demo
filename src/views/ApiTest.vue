<template>
    <div>
        <span>请求测试页面</span>
        <button @click="requestTest">点击我</button>
    </div>
</template>
<script>
import {
    postTest
} from '@/api/apiTest'
export default {
    name: 'apiTest',
    mounted() {
    },
    methods: {
        requestTest() {
            const params = {
                name: 'bluesLi'
            }
            postTest(params).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>