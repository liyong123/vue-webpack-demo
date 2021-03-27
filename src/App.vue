<template>
    <div id='app'>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'app',
    data () {
        return {
            test: 'vue-webapck-demo'
        }
    }
}
</script>
<style lang="scss" scoped>
    #app {
        height: 100%;
    }
    .el-container {
        height: 100%;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>
