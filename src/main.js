import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
//import VueAMap from 'vue-amap';
Vue.use(BaiduMap, {
  ak: 'TSZd4oZfqZEKZxeq5DSGBrDtu1Ry1HUi'
})

//Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   key: '37365deb7fc9bb92a04183a81ddbd031',
//   plugin: [
//     'Autocomplete', 
//     'PlaceSearch', 
//     'Scale', 
//     'OverView', 
//     'ToolBar', 
//     'MapType', 
//     'PolyEditor', 
//     'CircleEditor',
//     'Marker',
//     'Heatmap'
//   ],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.4'
// });
import * as echarts from 'echarts'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
