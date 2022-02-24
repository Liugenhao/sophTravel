<template>
  <div class="index-page">
    <div class="map-wrap" style="height:620px;">
      <div id="Map"></div>
    </div>
  </div>
</template>

<script>
import DataSet from "@antv/data-set";
import { Chart } from "@antv/g2";
import mapJson from "@/map/jxmap.json";
export default {
  name: 'indexPage',
  data () {
    return {
      initData: [
        {
          name: "南湖区",
          value: 7953,
          value2:323
        },
        {
          name: "秀洲区",
          value: 6924,
          value2:352,
        },
        {
          name: "嘉善县",
          value: 7975,
          value2:245
        },
        {
          name: "平湖市",
          value: 6710,
          value2:424
        },
        {
          name: "海盐县",
          value: 6710,
          value2:146
        },
        {
          name: "海宁市",
          value: 6810,
          value2:253
        },
        {
          name: "桐乡市",
          value: 6610,
          value2:321
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(function(){
      this.initChart(mapJson);
    })
  },
  methods: {
    initChart(data) {
      const chart = new Chart({
        container: "Map",
        autoFit: true,
        height: 580,
        padding: [20],
      });
      // 同步度量
      chart.scale({
        longitude: {
          sync: true,
        },
        latitude: {
          sync: true,
        },
      });
      chart.axis(false);
      chart.legend(false);

      // 绘制世界地图背景
      const ds = new DataSet();
      const worldMap = ds.createView("back").source(data, {
        type: "GeoJSON",
      });
      const worldMapView = chart.createView();
      worldMapView.data(worldMap.rows);
      worldMapView.tooltip(false);
      worldMapView
        .polygon()
        .position("longitude*latitude")
        .color("name",["#124352"])
        .style({
          stroke: "#07B18D",
          lineWidth: 1,
        })
        .label("name", (val,val2) =>{
          switch(val){
            case "南湖区" :
              val2 = this.initData[0].value2
              break
            case "秀洲区" :
              val2 = this.initData[1].value2
              break
            case "嘉善县" :
              val2 = this.initData[2].value2
              break
            case "平湖市" :
              val2 = this.initData[3].value2
              break
            case "海盐县" :
              val2 = this.initData[4].value2
              break
             case "海宁市" :
              val2 = this.initData[5].value2
              break
            default:
              val2 = this.initData[6].value2
              break
          }

          return {
            offsetY: 5,
            offsetX:-30,
            style: {
              fontSize: 14,
            },
            content:val + "\n"+val2 +'人'
          }
        });
      worldMapView.interaction("element-active");

      const userDv = ds
        .createView()
        .source(this.initData)
        .transform({
          geoDataView: worldMap,
          field: "name",
          type: "geo.centroid",
          as: ["longitude", "latitude"],
        });
      const userView = chart.createView();
      userView.data(userDv.rows);
      userView
        .point()
        .position("longitude*latitude")
        .shape("line")
        .size("value", [20, 35])
        .style({
          lineWidth: 10,
          stroke: "l(90) 0.1:#C69D13 0.4:#D3A814 0.5:#02D89F 1:#078161",
          strokeOpacity:1
        })
        .label("value", (val) => {
          return {
            style: {
              fill: "#ffffff",
              fontSize: 13,
            },
            offsetY: -5,
            offsetX:-30,
            content: val + "人",
          };
        })
        .tooltip(false);
      chart.render();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.index-page {
  background-color: #0A4257;
  .map-wrap {
    padding: 20px;
    position: relative;
  }
  .tip {
    position: absolute;
    right: 100px;
    bottom: 50px;
    text-align: right;
  }
  .lenged {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #f7c71a;
  }
}
</style>
