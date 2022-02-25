<template>
  <div class="wrapper">
      <div class="amap-wrapper">
        <el-amap 
          class="amap-box" 
          :vid="'amap-vue'" 
          :resizeEnable="true"
          :center="center"
          :zoom="zoom">
            <div
              v-for="(marker,index) in markers"
              :key="index">
              <el-amap-marker
                :position="marker.position"
                :events="marker.events">
                
                </el-amap-marker>
            </div>
          
        </el-amap>
      </div>
  </div>
</template>
<script>
export default {
  name:"ScenicFlow2",
  data () {
    return {
      center:[120.76,30.77],
      zoom:10,
      markers:[
        {
          area:"南湖区",
          position:[120.749953,30.764652],
          events:{
            click () {
              console.log(11)
              this.zoom = 12
            }
          }
        },
        {
          area:"秀洲区",
          position:[120.720431,30.763323]
        },
        {
          area:"嘉善县",
          position:[120.921871,30.841352]
        },
        {
          area:"海盐县",
          position:[120.942017,30.522223]
        },
        {
          area:"海宁市",
          position:[120.688821,30.525544]
        },
        {
          area:"平湖市",
          position:[121.014666,30.698921]
        },
        {
          area:"桐乡市",
          position:[120.551085,30.629065]
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .amap-wrapper {
    width: 600px;
    height: 500px;
    margin:30px auto;
  }
</style>