// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './component/App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import axios from 'axios'
import api,{domain} from './js/api.js'
import './less/index.less'

Vue.use(ElementUI)

axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;

Vue.prototype.$http = axios;
Vue.prototype.$api =  api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:createElement=>createElement(App)
})
