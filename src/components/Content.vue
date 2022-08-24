<script>
import Card from './Card.vue'
import {mapState} from 'vuex'
export default {
    components: {
        Card
    },
    data(){
        return {
            activeSort: 0,
            sortItem: ['默认', '最新', '热榜'],
        }
    },
    methods:{
        debounce(fn, delay) {
        let timer = null; // 借助闭包
            return function () {
                if (timer) {
                clearTimeout(timer);
                }
                timer = setTimeout(fn, delay); // 简化写法
            };
        },
        changeSort: function(index){
            const temp = this.activeSort;
            this.activeSort = index
            if( this.activeSort != temp){

                this.$store.dispatch({
                    type: 'getArticleInfo',
                    sort: this.activeSort,
                    clearU : 1,
                })
            }
            
        },
        handleScroll: function(){
            if(this.dataNum){
                // 变量 scrollHeight 是滚动条的总高度
                const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

                // 变量 windowHeight 是可视区的高度
                const windowHeight = document.documentElement.clientHeight || document.body.clientHeight

                // 变量scrollTop为当前页面的滚动条纵坐标位置
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                // 滚动条到底部得距离 = 滚动条的总高度 - 可视区的高度 - 当前页面的滚动条纵坐标位置
                let scrollBottom = scrollHeight - windowHeight - scrollTop
                if(scrollBottom <= 300){
                    this.$store.dispatch({
                        type: 'getArticleInfo',
                        sort: this.activeSort,
                        clearU: 0
                    })
                }  
            }


        },
        intoArticle: function(id){
            this.$router.push({
                path: '/articles',
                query:{
                    id: id
                },

            })
        },
        throttle: function(func, delay){
            let timer = null;
            return function(...args){
                if(!timer){
                    timer=setTimeOut(()=>{
                        func.apply(this,args)
                        timer=null
                    },delay)    
                }
            }

        }
    },
    computed:mapState(['usersLists', 'dataNum']),
    mounted(){
        this.$store.dispatch({
            type: 'getArticleInfo',
            sort: this.activeSort,
            clearU: 0
        })

        window.addEventListener('mousewheel', this.debounce(this.handleScroll, 50))

    }
}
</script>
<template>
<div class="content">
    <ul class="article">
        <ul class="list-sort">
            <li v-for="(item, index) in sortItem" :key="index" :class="index==activeSort?'active':''" @click="debounce(changeSort(index), 50)()">{{item}}</li>
        </ul>
        <li v-for="item in usersLists" :key="item" @click.stop="intoArticle(item.id)"><Card :cardLists="item"></Card></li>
    </ul>
    <div class="footer">
        <p>——  到底啦  ——</p>
    </div>
    
</div>
</template>
<style scoped>
.content{
    width: 100%;
}
.article{
    width: 700px;
    margin: 0 auto;
}
.list-sort{
    display: flex;
    padding: 1.3rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
}
.list-sort li{
    cursor: pointer;
    padding: 0 1.2rem;
    font-size: 1.17rem;
    border-right: 1px solid #f1f1f1;
}
.list-sort li:nth-last-child(1){
    border: none;
}
.list-sort li.active{
    color: #1e80ff;
}
.footer{
    display: flex;
    justify-content: center;
    margin: 60px;
    color: #909090;
}
</style>
