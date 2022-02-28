<template>
  <div class="container">
    <div id="appMap"></div>
    <!--<el-amap 
      :center="center" 
      :vid="'amapvue'" 
      :zoom="zoom" 
      
      mapStyle="dark"
      :plugin="plugins">
    </el-amap>-->
  </div>
</template>

<script>
export default {
  name:"HeatMap2",
  data () {
    return {
      data: [
        {lng: 120.718261, lat: 30.71984, value: 200},
        {lng: 120.793332, lat: 30.76532, value: 51},
        {lng: 120.789787, lat: 30.70658, value: 15},
        {lng: 120.711261, lat: 30.71984, value: 86},
        {lng: 120.790332, lat: 30.70532, value: 51},
        {lng: 120.799787, lat: 30.77658, value: 15},
        {lng: 120.718241, lat: 30.71184, value: 81},
        {lng: 120.797352, lat: 30.76038, value: 32},
        {lng: 120.769787, lat: 30.70358, value: 26},
        {lng: 120.778211, lat: 30.71084, value: 121},
        {lng: 120.703932, lat: 30.74512, value: 11},
        {lng: 120.789787, lat: 30.70658, value: 35},
        {lng: 120.788061, lat: 30.78684, value: 66},
        {lng: 120.793032, lat: 30.76502, value: 43},
        {lng: 120.789741, lat: 30.78458, value: 15},
        {lng: 120.778231, lat: 30.71684, value: 146},
        {lng: 120.783032, lat: 30.72502, value: 64},
        {lng: 120.790747, lat: 30.75608, value: 55},
      ],
    }
  },
  mounted(){
   
    this.initMap()
  },
  methods:{
    initMap() {
      var that = this
      let map = new AMap.Map('appMap', {
        resizeEnable: false,   //调整大小启用
        center: [120.749953, 30.764652],    //初始化成功后的中心点
        zoom: 12   //缩放比例
      })
      map.setMapStyle('amap://styles/darkblue')  
      //map.setMapStyle('amap://styles/ea39984c004755ab600f2aecd4ef748b')
      //热力图
      let heatmap
      //使用插件
      map.plugin(['AMap.Heatmap'], function() {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
          radius: 20, //给定半径
          opacity: [0.2, 1.0],
          // 颜色范围
          color: {
            0.45: 'rgb(255,0,0)',
            0.55: 'rgb(255,0,0)',
            0.65: 'rgb(255,0,0)',
            0.95: 'rgb(255,0,0)',
          }
        })
         //设置数据集
        heatmap.setDataSet({
          data: that.data,   //坐标数据集  即之前请求到的热力图数据
          max: 1    //权重的最大值  max不填则取数据集count最大值 (该值影响热力图颜色)
        })
      })
      //绘制矩形
      this.getPolygon(map)
    },
     //地图轮廓
    getPolygon(map) {
      let dongchengJson = require('@/map/jxmap.json')   
      var path = dongchengJson.features[0].geometry.coordinates[0]
      console.log(path)
      var polygon = new AMap.Polygon({
        path: path,                  //路径
        strokeColor: '#1EE621',      //轮廓线颜色
        strokeWeight: 2,             //轮廓线宽度
        strokeOpacity: 0.2,           //轮廓线透明度
        fillOpacity: 0.5,              //矩形内部填充颜色透明度
        fillColor: '#00203D',             //矩形 内部填充颜色透明度
        zIndex: 50                    //多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
      })
      map.add(polygon)  //添加到地图上
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    height: 600px;
    #appMap {
      width: 100%;
      height: 100%;
    }
  }
</style>