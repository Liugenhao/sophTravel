<template>
  <el-row class="container">
    <el-col :span="24">
      <vue-seamless-scroll
        ref="seamlessScroll"
        :data="dataLists"
        :class-option="classOption"
        class="warp">
        <div
          v-for="(item,i) in dataLists"
          :key="i">
          <div 
            class="item" 
            :style="{'background-image': 'url('+item.imgurl+')'}">
            <div class="item-header">
              <h4 class="title">
                {{item.name}}
                <span class="star">{{item.star}}A</span>
                <span v-if="item.fcwnum<30 || item.fcwnum==30" class="warning sooth">舒适</span>
                <span v-else-if="item.fcwnum>30 && item.fcwnum<90" class="warning general">一般</span>
                <span v-else class="warning full">爆满</span>
              </h4>
            </div>
            <div class="item-content">
              <ul class="list">
                <li
                  class="list-item"  
                  v-for="(subitem,index) in item.warningInfoVo" 
                  :key="index" >
                  <p class="count">
                    {{subitem.count}}
                  </p>
                  <p class="text" v-if="index == 0">{{subitem.text}}<br />（人）</p>
                  <p class="text" v-else>{{subitem.text}}<br />（万人）</p>
                </li>
              </ul>
            </div>
            <div class="bg"></div>
          </div>
        </div>
      </vue-seamless-scroll>
    </el-col>
  </el-row>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import { getklWarning } from '@/api/index.js'
export default {
  name:"SpotWarning",
  components:{
    vueSeamlessScroll
  },
  data () {
    return {
      dataLists:[],
    }
  },
  computed:{
    classOption(){
      return {
        //step:5,
        singleHeight: 199,
        openWacth:true,
        limitMoveNum:this.dataLists.length
      }
    },
  },
  watch :{
    dataLists:function(val){
      //console.log(val)
      this.dataLists = val;
    }
  },
  mounted() {
    this.ininData()
  },
  methods:{
    ininData () {
        getklWarning().then(res => {
        //console.log(res)
        res.forEach((val) => {
          this.dataLists.push(val)
        });
        //console.log(this.dataLists)
        this.$refs.seamlessScroll.reset()
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .container {
    .warp{
      height: 590px;
      overflow: hidden;
    }
    .item {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 184px;
      box-sizing: border-box;
      margin-bottom: 15px;
      color: #ddd;
      padding: 10px 20px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      overflow: hidden;
      .item-header {
        padding-bottom: 35px;
        color: #fff;
        z-index: 10;
      }
      .item-content {
        z-index: 10;
      }
      .title {
        letter-spacing: 1px;
        text-shadow: 1px 1px 3px #f8a221;
        font-size: 22px;
        .warning {
          float: right;
          font-size: 14px;
          text-shadow: none;
          padding:2px 8px;
          border-radius: 2px;
        }
        .sooth {
          background-color: rgb(26, 209, 133);
        }
        .general {
          background-color: #2ebeb2;
        }
        .full {
          background-color: #eb4e4e;
        }
      }
      .star {
        border-radius: 2px;
        padding:1px 4px;
        line-height: 24px;
        border-radius: 2px;
        font-size:18px;
        display: inline-block;
        background-color: #d8830d;
      }
      .list {
        display: flex;
        flex-direction: row;
        .list-item {
          flex: 0 0 33.33%;
          text-align: center;
          .count {
            padding-bottom: 30px;
            color: #f5a22f;
            font-weight: 600;
            font-size: 19px;
          }
        }
        .text {
          font-size: 16px;
        }
      }
      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
</style>