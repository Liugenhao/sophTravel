<template>
  <div class="container">
    <div class="heat-map" ref="heatmap">
      <baidu-map 
        class="map" 
        :center="{lng: 120.749953, lat: 30.764652}" 
        :zoom="14"
        :scroll-wheel-zoom="true">
        <bml-heatmap 
          :data="data" 
          :max="100" 
          :radius="10">
        </bml-heatmap>
      </baidu-map>
    </div>
  </div>
</template>
<script>
import { BmlHeatmap } from 'vue-baidu-map'
import styleJson from '@/assets/js/custom_map_config.json'
//import mapJson from "@/map/jxmap.json";
export default {
  name:"HeatMap",
  components: {
    BmlHeatmap
  },
  data () {
    return {
      mapStyle:{
        styleJson:styleJson
      },
      data: [
        {lng: 120.718261, lat: 30.71984, count: 200},
        {lng: 120.793332, lat: 30.76532, count: 51},
        {lng: 120.789787, lat: 30.70658, count: 15},

        {lng: 120.711261, lat: 30.71984, count: 86},
        {lng: 120.790332, lat: 30.70532, count: 51},
        {lng: 120.799787, lat: 30.77658, count: 15},

        {lng: 120.718241, lat: 30.71184, count: 81},
        {lng: 120.797352, lat: 30.76038, count: 32},
        {lng: 120.769787, lat: 30.70358, count: 26},

        {lng: 120.778211, lat: 30.71084, count: 121},
        {lng: 120.703932, lat: 30.74512, count: 11},
        {lng: 120.789787, lat: 30.70658, count: 35},

        {lng: 120.788061, lat: 30.78684, count: 66},
        {lng: 120.793032, lat: 30.76502, count: 43},
        {lng: 120.789741, lat: 30.78458, count: 15},

        {lng: 120.778231, lat: 30.71684, count: 146},
        {lng: 120.783032, lat: 30.72502, count: 64},
        {lng: 120.790747, lat: 30.75608, count: 55},
      ],
      // gradient:{
      //   .5:'rgb(0, 110, 255)',
      //   .8:'rgb(100, 0, 255)'
      // }
    }
  },
  mounted(){
    this.$nextTick(function(){
      //this.initChart(mapJson)
    })
  },
  methods:{
    // initChart (data) {
      
    // }
  }
}
</script>
<style lang="less" scoped>
  .container {
    width: 600px;
    height: 500px;
    margin: 30px auto;
    .heat-map {
      width: 100%;
      height: 100%;
      .map {
        height: 100%;
      }
    }
  }
</style>