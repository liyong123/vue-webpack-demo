<template>
    <div class="home" style="color: #fff">
        <div>{{$t('home.title')}}</div>
        <div>{{$t('home.subTitle')}}</div>
        <!-- <img src="../assets/images/logo.png" alt=""> -->
    </div>
</template>
<script>
export default {
    name: 'home',
    data () {
        return {
            test: 'vue-test',
            subTitle: this.$t('home.subTitle')
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
        background-size: 100% 100%;
        img {
            height: 200px;
            width: 200px;
            opacity: 1;
        }
    }
</style>
