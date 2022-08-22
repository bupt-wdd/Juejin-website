<script>
import AsideWritersList from './AsideWritersList.vue';
export default {
    components: { AsideWritersList },
    methods:{
        close: function(){
            const adver = document.querySelector('.adver');
            adver.style.display = 'none'
            return ;
        }
    }
}
</script>

<template>
<div class="aside">
    <div class="sign-in">
        <div class="sign-in-title">
            <div class="text">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-68373e0a=""><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z" fill="#FFCF8B" data-v-68373e0a=""></path><rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect><rect x="10.5" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect><rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect><rect x="10.5" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect><rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect><rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00" data-v-68373e0a=""></rect></svg>
                <span>晚上好</span>
            </div>
            <button class="sign-in-btn"><span>去签到</span></button>
        </div>
        <div class="sign-in-content">点亮你在社区的每一天</div>
    </div>
    <div class="adver-flow">
        <div class="adver">
            <a href="javascript:void(0)">
                <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88a1ea956734105a5b002dfb48840cb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
            </a>

            <svg @click="close()" t="1660135186617" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12292" width="200" height="200"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" p-id="12293" fill="#909090"></path></svg>
        </div>
        <div class="QRcode">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
            <div class="QRcode-intro">
                <span class="QRcode-intro-title">下载稀土掘金APP</span>
                <span>一个帮助开发者成长的社区</span>
            </div>
        </div>
    </div>
    <AsideWritersList></AsideWritersList>
    <ul class="recommend">
        <li class="recommend-list">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt="">
            <span>稀土掘金漫游指南</span>
        </li>
        <li class="recommend-list">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt="">
            <span>稀土掘金漫游指南</span>
        </li>
        <li class="recommend-list">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png" alt="">
            <span>稀土掘金漫游指南</span>
        </li>
    </ul>
    <footer>
    
    </footer>
</div>



</template>
<style  scoped>
.sign-in{
    width: 100%;
    height: 96px;
    box-sizing: border-box;
    padding: 16px;
    background-color: #fff;
    margin-bottom: 16px;
}
.sign-in-title{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}
.text svg{
    position: absolute;
    top: 0;
    left: 0;
}
.text span{
    color: #1d2929;
    margin-left: 36px;
    font-size: 18px;
    font-weight: 500;
}
.sign-in-btn{
    width: 72px;
    height: 32px;
    border: 1px solid #1e80ff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}
.sign-in-btn span{
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    color: #1e80ff;
}
.sign-in-content{
    text-align: center;
    font-size: 14px;
}
.adver-flow{
    margin-bottom: 18px;
}
.adver img{
    width: 100%;
}
.adver{
    position: relative;
    margin-bottom: 1.3rem;
}
.adver svg{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 1rem;
    height: 1rem;
    opacity: 0;
}
.adver:hover svg{
    opacity: 1;
}
.QRcode{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 12px;
    display: flex;
}
.QRcode img{
    width: 50px;
    margin-right: 16px;
}
.QRcode .QRcode-intro{
    display: flex;
    flex-direction: column;
}
.QRcode .QRcode-intro-title{
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: #1d2129;
    margin-bottom: 6px;
}
.writer-list{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
}
.writer-list-title{
    position: relative;
    padding: 1rem 1.3rem;
    font-size: 1.16rem;
    color: #333;
}
.writer-list-title svg{
    width: 1.8rem;
    height: 1.8rem;
    top: 1rem;
    left: 1.3rem;
}
.writer-list-title span{
    margin-left: 2rem;
    line-height: 1.8rem;
}
.recommend{
    margin-bottom: 30px;
}
.recommend-list{
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
}
.recommend-list:hover{
    background-color: #fbfbfb;
}
.recommend-list img{
    width: 36px;
    margin-right: 8px;
}
.recommend-list span{
    font-size: 1.16rem;
    line-height: 1;
    color: #333;
}
</style>