<script>
import Content from './Content.vue'
import Aside from './Aside.vue'
export default {
    components: {
    Content,
    Aside
}
}
</script>
<template>
<div class="content-container">
    <Content></Content>
    <Aside></Aside>
</div>
    
</template>
<style  scoped>
.content-container{
    max-width: 960px;
    margin: 110px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.aside{
    width: 320px;
}
@media screen and (max-width: 960px) {
    .aside{
        display: none;
    }
}
</style>