<script>
import TopNav from './components/TopNav.vue'
export default{
  components: {
    TopNav
  },
  /*
  mounted(){
    this.$store.dispatch('getJuejin')
  }
  */
}
</script>

<template>
<TopNav></TopNav>
<router-view></router-view>
</template>

<style scoped>

</style>
