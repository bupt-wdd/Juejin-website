<script>
export default {
    data(){
        return{
            lists: [{
                title: '首页',
                listUrl: '/'
            },{
                title: '沸点',
                listUrl: '/pins'
            },{
                title: '课程',
                listUrl: '/course'
            },{
                title: '直播',
                listUrl: '/live'
            },{
                title: '活动',
                listUrl: '/events/all'
            },{
                title: '商城',
                listUrl: 'javascript:void(0)'
            },],
            activeIndex: 0,
            showIndex: 0,
        }
    },
    methods: {
        switchModule: function(index){
            this.activeIndex = index
        },
        showList: function(){
            const phoneList = document.querySelector('.phone-left-list')
            if(this.showIndex == 0){
                phoneList.style.display = 'flex';
                this.showIndex = 1
            }else{
                phoneList.style.display = 'none';
                this.showIndex = 0
            }
            return false;
        },
    },
}
</script>
<template>
<div class="phone-left-nav">
    <a href="javascript:void(0)" class="active" @click="showList">{{lists[activeIndex].title}}</a>
    <ul class="phone-left-list">
        <li v-for="(item, index) in lists" :key="index" :class="activeIndex==index?'active':'' " @click="switchModule(index);showList()"><router-link :to="item.listUrl">{{item.title}}</router-link></li>
    </ul>
</div>
<ul class="left-nav-list">
    <li v-for="(item, index) in lists" :key="index" :class="activeIndex==index?'active':'' " @click="switchModule(index)"><router-link :to="item.listUrl">{{item.title}}</router-link></li>
</ul>
</template>
<style>
.left-nav-list{
    display: flex;
    flex-direction: row;
}
.left-nav-list li a{
    margin: 0 12px;
    font-size: 14px;
    line-height: 60px;
    position: relative;
}
.left-nav-list li:hover a::before{
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #1e80ff;
    position: absolute;
    bottom: -22px;
    left: 0;
}
.left-nav-list li:hover a{
    color: #000;
}
.active{
    color: #1e80ff;
}

.phone-left-nav{
    display: none;
    position: relative;
    margin: 0 12px;
    font-size: 1.33rem;
}

@media screen and (max-width: 1149px) {
    .phone-left-nav{
        display: block;
    }
    .left-nav-list{
        display: none;
    }
}

.phone-left-list{
    z-index: 99;
    position: absolute;
    top: 30px;
    left: -60px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    width: 150px;
    display: none;/*flex*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
    background-color: #fff;
}
.phone-left-list li{
    height: 2rem;
    padding: 0.6rem;
}
.phone-left-list a{
    line-height: 30px;
}
</style>