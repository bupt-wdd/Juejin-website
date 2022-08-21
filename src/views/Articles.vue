<script>
import { mapState } from 'vuex';
import TopNav from "../components/TopNav.vue";
import DetailPage from "../components/DetailPage.vue";
export default{
    components: {
        DetailPage,
        TopNav,
    },
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
    <DetailPage />
</template>
<style scoped>

</style>