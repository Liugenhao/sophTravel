<template>
  <div class="wrapper">
    <el-button
      v-if="backFlag"
      type="primary"  
      size="small" 
      class="back-btn"
      @click="backMap">返回
    </el-button>
    <div id="isMap" class="amap-wrapper"></div>
  </div>
</template>
<script>
import deflultData from '@/assets/js/marker2.js'
import dwicon from '@/assets/img/dw2.png'
export default {
  name:"ScenicFlow2",
  data () {
    return {
      center:[120.76,30.77],
      zoom:9,
      map:null,
      backFlag:false
    }
  },
  mounted () {
    this.initData();
  },
  methods:{
    backMap () {
      this.backFlag = false;
      this.map.setZoom(this.zoom)
      this.map.setCenter(this.center)
      console.log(1)
    },
    initData () {
      let _this = this;
       _this.map = new AMap.Map('isMap', {
        resizeEnable: true,   //调整大小启用
        center: this.center,    //初始化成功后的中心点
        zoom: this.zoom,   //缩放比例
      })

      //主题
      //map.setMapStyle('amap://styles/darkblue') 
      _this.map.setMapStyle('amap://styles/88f11672c29e73fef4ee6eac1c6f39e8') 
      // 创建 AMap.Icon 实例：
      var icon = new AMap.Icon({
        size: new AMap.Size(32, 32),    // 图标尺寸
        image: dwicon,  // Icon的图像
        imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(32, 32)   // 根据所设置的大小拉伸或压缩图片
      });

      for (let i =0;i<deflultData.length;i++) {
        // 创建一个 Marker 实例：
        var marker = new AMap.Marker({
          position:deflultData[i].position,
          title: deflultData[i].area,
          offset: new AMap.Pixel(-10, -10),
          icon: icon, // 添加 Icon 图标 URL
        });
        // 将创建的点标记添加到已有的地图实例：
        _this.map.add(marker);
        marker.on('click',function(){
          _this.backFlag = true;
          _this.map.setZoom(14)
          _this.map.setCenter(deflultData[i].position)
          _this.heatmapFun(_this.map,deflultData[i].data)
          //_this.getPolygon(map,i) //没有数据暂时注释
        })
      }
      
    },
    heatmapFun (map,data) {
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
          data: data,   //坐标数据集  即之前请求到的热力图数据
          max: 1    //权重的最大值  max不填则取数据集count最大值 (该值影响热力图颜色)
        })
      })
      
    },
     //地图轮廓
    getPolygon(map,index) {
      console.log(index)
      let dongchengJson = require('@/map/jxmap.json')  
      console.log(dongchengJson) 
      let path = dongchengJson.features[index].geometry.coordinates[0]
      //console.log(path)
      var polygon = new AMap.Polygon({
        path: path,                  //路径
        strokeColor: '#1EE621',      //轮廓线颜色
        strokeWeight: 2,             //轮廓线宽度
        strokeOpacity: 0.2,          //轮廓线透明度
        fillOpacity: 0.5,            //矩形内部填充颜色透明度
        fillColor: '#00203D',        //矩形 内部填充颜色透明度
        zIndex: 50                   //多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
      })
      map.add(polygon)  //添加到地图上
    }
  }
}
</script>
<style lang="less" scoped>
  .wrapper {
    position: relative;
    .back-btn {
      position: absolute;
      top:10px;
      left: 10px;
      z-index: 999;
      opacity: 0.9;
      background: #1f4583;
      border-color: #909399;
    }
    .amap-wrapper {
      height:550px;
    }
  }
  

</style>