import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import NutUI from "@nutui/nutui";
// import "@nutui/nutui/dist/nutui.css";
// NutUI.install(Vue); // 全部加载
import './nut-ui';//按需加载
import Axios from 'axios';
import Global from './plugins/_global';
import "./assets/font/iconfont.css";

import { Tabbar, TabbarItem } from 'vant'; //按需加载
Vue.use(Tabbar).use(TabbarItem);

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

Vue.use(Global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
