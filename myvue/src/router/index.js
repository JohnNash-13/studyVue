import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '../components/Content.vue'
import Main from '../components/Main.vue'
import Span from '../components/Span.vue'
//安装路由
//显示声明使用VueRouter
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter ({
  routes: [
    {
      //路由路径 to里面的与这里一致
      path: '/content',
      //name与path名字即可
      name: 'content',
      //跳转的路由
      component: Content
    },
    {
      //路由路径
      path: '/main',
      name: 'main',
      //跳转的路由
      component: Main
    },
    {
      //路由路径
      path: '/span',
      name: 'span',
      //跳转的路由
      component: Span
    },
  ]
})
