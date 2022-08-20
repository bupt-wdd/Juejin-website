<script>
import TopNavList from './TopNavList.vue'
import TopNavSearch from './TopNavSearch.vue'
import TopNavCreate from './TopNavCreate.vue'
import TopNavUser from './TopNavUser.vue'
export default {
    components:{
    TopNavList,
    TopNavSearch,
    TopNavCreate,
    TopNavUser,
    },
    methods: {
        judgeTop(){
            const container = document.querySelector('.container')
            let scrollY = document.documentElement.scrollTop;
            if(scrollY > 400){
                container.classList = 'container'
            }else{
                container.classList = 'container visible'
            }
        },
    },
    mounted(){
        window.addEventListener('scroll', this.judgeTop, true)
    },
}
</script>
<template>
<div class="container visible">
    <header class="top-nav">
        <a href=""><div class="logo"></div></a>
        <ul class="list-nav">
            <li class="left-nav">
                <TopNavList></TopNavList>
            </li>
        </ul>
        <ul class="right-nav">
            <li>
                <TopNavSearch></TopNavSearch>
            </li>
            <li>
                <TopNavCreate class="showBtn"></TopNavCreate>
            </li>

            <li>
                <a href="" class="memberVip"><img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="">会员</a>
            </li>
            <li>
                <a href="" class="userEmail"><svg t="1660015470716" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2262" width="200" height="200"><path d="M958.299961 608.912214c19.617603 100.407827-103.890406 232.831836-446.295868 232.831836-314.266431 0-470.601433-127.317711-445.727909-230.486418 14.700411-60.9737 81.322487-58.906621 97.238636-90.310865 15.916149-31.40936 29.980037-45.902446 41.62575-81.002872 11.645713-35.106566 22.904601-114.761744 33.771545-144.326083 10.871038-29.5582 25.041354-55.425334 42.5089-77.596286s37.653109-41.011043 60.550546-56.535621c22.904601-15.517415 46.947166-26.874067 71.618067-35.468816-9.655299 3.363607-7.925839-13.233396 13.812143-33.926694 21.739006-20.692275 48.520053-31.035854 80.350305-31.035854 31.832299 0 58.619486 10.343579 80.352352 31.035854 21.736959 20.693298 15.30521 31.707143 15.30521 31.707143 26.395245 8.129144 51.431482 19.957541 75.108711 35.474956 23.682346 15.517415 44.254734 34.733059 61.722281 57.638745 17.467547 22.912849 31.439333 49.14735 41.924568 78.70555 10.479095 29.564339 21.539453 106.263186 33.184143 142.105508 11.645713 35.842323 25.333008 51.077306 41.63496 83.223447C873.287277 553.09086 948.219972 557.318138 958.299961 608.912214zM667.167362 900.845099c4.662379 0-9.471096 62.10036-154.593263 62.10036-136.339784 0-158.269133-62.10036-155.164292-62.10036 0 0 77.489021 15.46932 150.871342 15.46932C586.43023 916.313396 667.167362 900.845099 667.167362 900.845099z" p-id="2263" fill="#8a8a8a"></path></svg></a>
            </li>
            <li>
                <TopNavUser></TopNavUser>
            </li>
        </ul>
    </header>
</div>
</template>
<style  scoped>
.container{
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
    transform: translate3d(0,-100%,0);
    transition: all .2s;
    z-index: 99;
}
.visible{
    transform: translateZ(0);
    position: fixed;
    top: 0;
    left: 0;
}
.top-nav{
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
.logo{
    background-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg');
    background-size: cover;
    height: 22px;
    width: 107px;
    margin: 0 24px;
    margin-right: 12px;
}
.list-nav{
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: space-between;
}
.left-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.right-nav{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.userEmail{
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    margin: 12px;
}
.userEmail svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.memberVip{
    display: flex;
    justify-content: center;
    align-items: center;
}
.memberVip img{
    width: 24px;
    height: 24px;
    margin: 0 3px;
}
@media screen and (max-width: 1350px){
    .memberVip{
        display: none;
    }
    .showBtn{
        display: none;
    }
    
}
@media (max-width: 640px) {
    .logo{
        background-image: url('https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg');
        width: 31px;
        height: 24px;
        margin-right: 2px;
    }
}
</style>