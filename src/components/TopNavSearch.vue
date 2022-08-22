<script>
export default {
    methods:{
        focusInput:function(){
            const search = document.querySelector('#search')
            search.style.border = '1px solid #1e80ff'
            console.log(search);
        }
    }
}
</script>

<template>
<form id="search">
    <input type="text" placeholder="探索稀土掘金" class="search-space" @click="focusInput">
    <div class="search-btn">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="">
    </div>
</form>
</template>

<style  scoped>
#search{
    width: calc(100% - 40px);
    border: 1px solid #c2c8d1;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    height: 34px;
}
#search:hover{
    border: 1px solid #777;
}
.search-space{
    border: none;
    padding: 0.6rem 0 0.6rem 1rem;
    outline: none;
    color: #8a919f;
    width: 100%;
}
.search-btn{
    position: absolute;
    top: 2px;
    right: 2px;
    width: 44px;
    height: 30px;
    background-color: #f2f3f5;
    border-radius: 2px;
}
.search-btn img{
    display: inline-block;
    margin: 7px 15px;
}
@media screen and (min-width: 1350px){
    #search{
        width: 360px;
    }
}
@media screen and (max-width: 1069px){
    #search{
        width: 240px;
    }
}
@media (max-width: 640px) {
    #search{
        width: 142px;
    }
}
</style>