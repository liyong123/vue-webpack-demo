<template>
    <div id='app'>
        <span>{{test}}</span>
        <router-view></router-view>
    </div>
</template>
<script>
import './assets/css/index.css'
export default {
    name: 'app',
    data() {
        return {
            test: 'vue-webapck-demo'
        }
    }
}
</script>
<style lang="scss" scoped>
    #app {
        flex: 1;
        color: red;
        height: 100%
    }
</style>