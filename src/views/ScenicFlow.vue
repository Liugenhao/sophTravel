/** 
  景区流客地图
*/
<template>
  <div class="map-container">
    <baidu-map 
      class="map" 
      :center="center"
      :mapStyle="mapStyle"
      :zoom="zoom"
      :dragging="true"
      :scroll-wheel-zoom="true">
      <div v-for="(marker,index) in markers" :key="index">
        <bm-marker 
          :position="{lng: marker.position.lng, lat: marker.position.lat}" 
          :dragging="true"
          @click="clickMarker(marker.area,marker.position.lng,marker.position.lat)">
        </bm-marker>
      </div>
      <div v-if="panelFlag">
        <bml-heatmap
          :data="flowsCount" 
          :max="100" 
          :radius="20">
        </bml-heatmap>
      </div>
    </baidu-map>
    <div class="bd-panel" v-if="panelFlag">
      <div class="bd-panel-item">
        <h3 class="panel-title">周际对比</h3>
        <div class="panel-content">
          周际对比内容
        </div>
      </div>
      <div class="bd-panel-item">
        <h3 class="panel-title">年龄段分布</h3>
        <div class="panel-content">
          年龄段内容
        </div>
      </div>
      <div class="bd-panel-item">
        <h3 class="panel-title">客源排行</h3>
        <div class="panel-content">
          客源排行内容
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
import {BmlHeatmap} from 'vue-baidu-map'
import deflultData from '@/assets/js/markers.js'
import styleJson from '@/assets/js/custom_map_config.json'
export default {
  name:"ScenicFlow",
  components:{
    BmlHeatmap
  },
  data () {
    return {
      markers:null,
      zoom:10,
      panelFlag:false,
      center:{
        lng:120.750865,
        lat:30.762653
      },
      mapStyle:{
        styleJson:styleJson
      },
      flowsCount:null,
      flowsList:[
        {
          area:"南湖区",
          flows:[
            {lng:120.749943, lat: 30.764643, count: 50},
            {lng:120.749957, lat: 30.764653, count: 200},
            {lng:120.749964, lat: 30.764672, count: 15},
            {lng:120.749548, lat: 30.764343, count: 23},
            {lng:120.749657, lat: 30.764253, count: 52},
            {lng:120.749364, lat: 30.764172, count: 43},
            {lng:120.749243, lat: 30.764523, count: 64},
            {lng:120.749157, lat: 30.764321, count: 67},
            {lng:120.749944, lat: 30.764164, count: 87}
          ]
        },
        {
          area:"秀洲区",
           flows:[
            {lng:120.720436, lat: 30.763322, count: 50},
            {lng:120.720421, lat: 30.763302, count: 200},
            {lng:120.720424, lat: 30.763327, count: 15}
          ]
        },
        {
          area:"嘉善县",
          flows:[
            {lng:120.921851, lat: 30.841332, count: 50},
            {lng:120.921869, lat: 30.841375, count: 200},
            {lng:120.921848, lat: 30.841328, count: 15}
          ]
        },
        {
          area:"海宁市",
          flows:[
            {lng:120.688817, lat: 30.525514, count: 50},
            {lng:120.688828, lat: 30.525532, count: 200},
            {lng:120.688841, lat: 30.52559, count: 15}
          ]
        },
        {
          area:"平湖市",
          flows:[
            {lng:121.014626, lat: 30.698923, count: 50},
            {lng:121.014642, lat: 30.698924, count: 200},
            {lng:121.014635, lat: 30.698927, count: 15},
            {lng:121.014576, lat: 30.698623, count: 50},
            {lng:121.014582, lat: 30.698721, count: 200},
            {lng:121.014495, lat: 30.698872, count: 15}
          ]
        },
        {
          area:"海盐县",
           flows:[
            {lng:120.942037, lat: 30.522213, count: 50},
            {lng:120.942021, lat: 30.522241, count: 200},
            {lng:120.942061, lat: 30.522253, count: 15}
          ]
        },
        {
          area:"桐乡市",
          flows:[
            {lng:120.551065, lat: 30.629054, count: 50},
            {lng:120.551075, lat: 30.629061, count: 200},
            {lng:120.551083, lat: 30.629072, count: 15}
          ]
        },
      ]
    }
  },
  mounted() {
    this.$nextTick(function(){
      this.markers = deflultData
    })
  },
  methods:{
    clickMarker (area,lng,lat) {
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = 16
      this.panelFlag = true
      this.flowsList.forEach( item =>{
        if(item.area == area) {
          this.flowsCount = item.flows
        }
      })
    }
  }
}
</script>

<style scoped>
  .map-container {
    height: 600px;
    padding: 20px;
    position: relative;
  }
  .map {
    height: 560px;
    width: 100%;
  }
  .bd-panel {
    position: absolute;
    top:110px;
    right: 20px;
    width: 220px;
    padding:10px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .bd-panel-item{
    color: #fff;
  }
</style>