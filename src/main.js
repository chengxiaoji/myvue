import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import router from "./router";
import axios from 'axios';
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
