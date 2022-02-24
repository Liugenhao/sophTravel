<template>
  <el-row class="container">
    <el-col :span="24">
      <vue-seamless-scroll 
        :data="jqlist" 
        :class-option="classOption"
        class="warp">
        <div
          v-for="(item,i) in jqlist"
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
                <li class="numbers">
                  <span 
                    v-for="(subitem,index) in item.datas" 
                    :key="index">
                    {{subitem}}
                  </span>
                </li>
                <li class="text">
                  <span>当前小时客流量（人）</span>
                  <span>瞬时承载量（万人）</span>
                  <span>最大承载量（万人）</span>
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
import img from '@/assets/img/mhz.jpg'
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name:"SpotWarning",
  components:{
    vueSeamlessScroll
  },
  data () {
    return {
      classOption:{
        step: 0.3
      },
      jqlist:[
        {
          name:"南湖景区",
          star:5,
          imgurl:img,
          fcwnum:30,
          datas:[1123,4.02,53.32]
        },
        {
          name:"梅花洲景区",
          star:4,
          imgurl:img,
          fcwnum:60,
          datas:[41,5.67,2.5]
        },
        {
          name:"歌斐颂巧克力小镇",
          star:3,
          imgurl:img,
          fcwnum:90,
          datas:[54,1,2.3]
        },
        {
          name:"南湖景区",
          star:5,
          imgurl:img,
          fcwnum:30,
          datas:[1123,4.02,53.32]
        },
        {
          name:"梅花洲景区",
          star:4,
          imgurl:img,
          fcwnum:60,
          datas:[41,5.67,2.5]
        },
        {
          name:"歌斐颂巧克力小镇",
          star:3,
          imgurl:img,
          fcwnum:90,
          datas:[54,1,2.3]
        },
        {
          name:"南湖景区",
          star:5,
          imgurl:img,
          fcwnum:30,
          datas:[1123,4.02,53.32]
        },
        {
          name:"梅花洲景区",
          star:4,
          imgurl:img,
          fcwnum:60,
          datas:[41,5.67,2.5]
        },
        {
          name:"歌斐颂巧克力小镇",
          star:3,
          imgurl:img,
          fcwnum:90,
          datas:[54,1,2.3]
        },
        {
          name:"南湖景区",
          star:5,
          imgurl:img,
          fcwnum:30,
          datas:[1123,4.02,53.32]
        },
        {
          name:"梅花洲景区",
          star:4,
          imgurl:img,
          fcwnum:60,
          datas:[41,5.67,2.5]
        },
        {
          name:"歌斐颂巧克力小镇",
          star:3,
          imgurl:img,
          fcwnum:90,
          datas:[54,1,2.3]
        },
        {
          name:"南湖景区",
          star:5,
          imgurl:img,
          fcwnum:30,
          datas:[1123,4.02,53.32]
        },
        {
          name:"梅花洲景区",
          star:4,
          imgurl:img,
          fcwnum:60,
          datas:[41,5.67,2.5]
        },
        {
          name:"歌斐颂巧克力小镇",
          star:3,
          imgurl:img,
          fcwnum:90,
          datas:[54,1,2.3]
        },
  
      ]
    }
  },

}
</script>
<style lang="less" scoped>
  .container {
    .warp{
      height: 600px;
      overflow: hidden;
    }
    .item {
      display: flex;
      justify-content: center;
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
        padding-bottom: 15px;
        color: #fff;
        z-index: 10;
      }
      .item-content {
        z-index: 10;
      }
      .title {
        letter-spacing: 1px;
        text-shadow: 1px 1px 3px #ef9817;
        font-size: 22px;
        .warning {
          float: right;
          font-size: 14px;
          text-shadow: none;
          padding:2px 8px;
          border-radius: 2px;
        }
        .sooth {
          background-color: rgb(17, 238, 146);
        }
        .general {
          background-color: rgb(62, 240, 225);
        }
        .full {
          background-color: #eb4e4e;
        }
      }
      .star {
        border-radius: 2px;
        padding:2px 4px;
        line-height: 24px;
        display: inline-block;
        background-color: #eb9722;
      }
      .list {
        li {
          display: flex;
          span {
            flex: 0 0 33.33%;
            text-align: center;
            
          }
        }
        .numbers {
          padding-bottom: 20px;
          span {
            color: #db9d45;
            font-weight: 600;
            font-size: 19px;
          }
        }
        .text {
          span {
            font-size: 14px;
          }
        }
      }
      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>