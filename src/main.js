import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
