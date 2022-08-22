<script>
export default {
    data(){
        return {
            writerList: {
                photoUrl: 'https://p3-passport.byteacctimg.com/img/user-avatar/c9eb1e0e30609a5a7f3e984fb0e723ba~300x300.image',
                levelUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-4.a78c420.png',
                wname: 'running533',
                wintro: 'dsdcysbicsbisobhdsbcdbchdbsbchdvcvcvccvcvccvcvcvc',
            }
        }
    }
}
</script>
<template>
    <div class="writer-list">
        <header class="writer-list-title">
            <svg t="1660136713012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15354" width="200" height="200"><path d="M318.2 411.2l193.6 193.6 361-361c7.7-7.7 11.9-18.2 11.6-29.1l-3.5-138c-0.6-21.6-18.2-38.8-39.8-38.8l-133.4 0.2c-10.5 0-20.6 4.2-28.1 11.7L318.2 411.2z" fill="#D32F2F" p-id="15355"></path><path d="M705.8 411.3L512.2 604.9l-361-361c-7.7-7.7-11.9-18.2-11.6-29.1l3.5-138c0.6-21.6 18.2-38.8 39.8-38.8l133.4 0.2c10.5 0 20.6 4.2 28.1 11.7l361.4 361.4z" fill="#F44336" p-id="15356"></path><path d="M512.3 656.9m-329.2 0a329.2 329.2 0 1 0 658.4 0 329.2 329.2 0 1 0-658.4 0Z" fill="#FFCA28" p-id="15357"></path><path d="M641.3 542.5l95.1 127.3c0.2-4.3 0.4-8.6 0.4-12.9 0-124-100.5-224.5-224.5-224.5S287.8 532.9 287.8 656.9c0 106 73.5 194.8 172.2 218.4l-94.6-126.5 275.9-206.3z" fill="#FFA000" p-id="15358"></path><path d="M736.4 669.8c-6.7 118-104.5 211.5-224.1 211.5-18 0-35.5-2.1-52.2-6.1L542 984.8c125.7-11.2 231.1-93.1 276.1-205.7l-81.7-109.3z" fill="#FFB300" p-id="15359"></path><path d="M736.4 669.8l-95.1-127.3-275.8 206.2 94.6 126.5c16.8 4 34.2 6.1 52.2 6.1 119.7 0.1 217.4-93.5 224.1-211.5z" fill="#FF8F00" p-id="15360"></path><path d="M512.3 656.9m-172.1 0a172.1 172.1 0 1 0 344.2 0 172.1 172.1 0 1 0-344.2 0Z" fill="#FFCA28" p-id="15361"></path></svg>
            <span>作者</span>
        </header>
        <ul>
            <li class="writer-list-per">
                <div class="writer-photo"><img :src="writerList.photoUrl" alt=""></div>
                <div class="writer-info">
                    <div class="writer-name">{{writerList.wname}}
                        <img :src="levelUrl" alt="">
                    </div>
                    <span class="writer-intro">{{writerList.wintro}}</span>
                </div>
            </li>
            <li class="writer-list-per">
                <div class="writer-photo"><img :src="writerList.photoUrl" alt=""></div>
                <div class="writer-info">
                    <div class="writer-name">{{writerList.wname}}
                        <img :src="levelUrl" alt="">
                    </div>
                    <span class="writer-intro">{{writerList.wintro}}</span>
                </div>
            </li>
            <li class="writer-list-per">
                <div class="writer-photo"><img :src="writerList.photoUrl" alt=""></div>
                <div class="writer-info">
                    <div class="writer-name">{{writerList.wname}}
                        <img :src="levelUrl" alt="">
                    </div>
                    <span class="writer-intro">{{writerList.wintro}}</span>
                </div>
            </li>
        </ul>
        <div class="writer-btn"><span>完整榜单</span></div>
    </div>
</template>
<style  scoped>
.writer-list{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 30px;
}
.writer-list ul{
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
}
.writer-list-title{
    position: relative;
    padding: 1rem 1.3rem;
    font-size: 1.16rem;
    color: #333;
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
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
.writer-list-per{
    background-color: #fff;
    padding: 1rem 1.3rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    /*border-bottom: 1px solid hsla(0,0%,59.2%,.1);*/
}
.writer-list-per:hover{
    background-color: #fbfbfb;
}
.writer-photo img{
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50px;
    margin-right: 0.5rem;
}
.writer-info{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 0;
}
.writer-name{
    display: flex;
    max-width: 163px;
    font-size: 1.16rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 3px;
}
.writer-name img{
    width: 35px;
    height: 16px;
    margin-left: 0.33rem;
}
.writer-intro{
    display: -webkit-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.writer-btn{
    cursor: pointer;
    background-color: #fff;
    padding: 12px;
    color: #007fff;
    text-align: center;
    
}
.writer-btn span{
    font-size: 1.16rem;
    line-height: 1.29;
}
</style>