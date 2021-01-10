<template>
    <div class="home" style="color: #fff">
        <span>home-page</span>
        <img src="../assets/images/logo.png" alt="">
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            test: 'vue-test'
        }
    }
}
</script>
<style lang="scss" scoped>
    .home {
        height: 100%;
        font-size: 20px;
        color: blue;
        background-image: url('../assets/images/meijing.jpg');
        background-repeat: no-repeat;
        img {
            height: 200px;
            width: 200px;
            opacity: 1;
        }
    }
</style>