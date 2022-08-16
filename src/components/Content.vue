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
            sortItem: ['推荐', '最新', '热榜'],
        }
    },
    methods:{
        changeSort: function(index){
            this.activeSort = index
        }
    },
    computed:mapState(['usersLists']),
}
</script>
<template>
<div class="content">
    <ul class="article">
        <ul class="list-sort">
            <li v-for="(item, index) in sortItem" :key="index" :class="index==activeSort?'active':''" @click="changeSort(index)">{{item}}</li>
        </ul>
        <li v-for="item in usersLists" :key="item" ><Card :cardLists="item"></Card></li>
    </ul>
    
</div>
</template>
<style>
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
</style>