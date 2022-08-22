<script>
import Main from '../components/Main.vue'
import MainTop from '../components/MainTop.vue'
import TopNav from "../components/TopNav.vue";
export default{
    components:{
    MainTop,
    Main,
    TopNav
}
}
</script>
<template>
<TopNav></TopNav>
<MainTop></MainTop>
<Main></Main>
</template>