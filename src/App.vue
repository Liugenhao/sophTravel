<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from './components/common/header.vue'
export default {
  name:"App",
  components:{
   Header
  }
}
</script>
<style lang="less">
body{margin:0}
div,h1,h2,h3,h4,h5,p,ul,ol{
  margin: 0;
  padding:0;
}
ul,ol{
  list-style: none;
}
a {text-decoration: none;}
</style>
