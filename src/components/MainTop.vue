<script>
export default {
    data(){
        return {
            lists: [{
                title: '综合',
                TopUrl: 'javascript:void(0)'
            },{
                title: '关注',
                TopUrl: 'javascript:void(0)'
            },{
                title: '后端',
                TopUrl: 'javascript:void(0)'
            },{
                title: '前端',
                TopUrl: 'javascript:void(0)'
            },{
                title: 'Android',
                TopUrl: 'javascript:void(0)'
            },{
                title: 'iOS',
                TopUrl: 'javascript:void(0)'
            },{
                title: '人工智能',
                TopUrl: 'javascript:void(0)'
            },{
                title: '开发工具',
                TopUrl: 'javascript:void(0)'
            },{
                title: '代码人生',
                TopUrl: 'javascript:void(0)'
            },{
                title: '阅读',
                TopUrl: 'javascript:void(0)'
            },],
            itemIndex: 0,
        }
    },
    methods: {
        toTop(){
            const mainTop = document.querySelector('.main-top')
            let scrollY = document.documentElement.scrollTop;
            if(scrollY > 400){
                mainTop.className = 'main-top totop'
            }else{
                mainTop.className = 'main-top'
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.toTop, true)
    },
}
</script>
<template>
<div class="main-top">
    <ul class="main-top-nav">
        <li v-for="(item, index) in lists" :key="index" :class="itemIndex==index?'active':''"><a :href=lists[index].TopUrl>{{item.title}}</a></li>
    </ul>
    
</div>
</template>
<style  scoped>
.main-top{
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 88;
    transition: all .2s;
    transform: translateZ(0);
}
.totop{
    transform: translate3d(0,-5rem,0);
}
.main-top-nav{
    display: flex;
    max-width: 990px;
    height: 3.38rem;
    align-items: center;
    margin: 0 auto;
    font-size: 14px;
    overflow-x: auto;
    line-height: 1;
}
.main-top-nav li a{
    padding: 0 12px;
    white-space: nowrap;
}
.main-top-nav li a:hover{
    color: #1e80ff;
}
</style>