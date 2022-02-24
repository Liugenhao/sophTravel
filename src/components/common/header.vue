<template>
   <div id="nav">
      <router-link to="/">全域客流</router-link> |
      <router-link to="/scenicflow">景区客流</router-link> |
      <router-link to="/spotwarning">景区预警</router-link>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
#nav {
  color: #fff;
  background-color: #0A4257;
  text-align: center;
  a{color: #fff;}
}
</style>