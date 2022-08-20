<script>
import { mapState } from 'vuex'
export default{
    data(){
        return {
            id: this.$route.query.id,
        }
    },
    mounted(){
        this.$store.dispatch({
            type: 'getArticleById',
            id: this.id
        })
    },
    computed:mapState(['cardList'])
}
</script>
<template>
    <div class="article">
        {{cardList}}
    </div>
</template>
<style scoped>
.article{
    margin: 80px;
}
</style>