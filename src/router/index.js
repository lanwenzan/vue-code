// 路由配置
import Vue from 'vue'
import Router from 'vue-router' // 这是基于vue的一个插件

import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcar/Shopcar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {name:'login',path:'/login',component:Login},
    {name:'admin',path:'/admin',component:Admin}
  ]
})
