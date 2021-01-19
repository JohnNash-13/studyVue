import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import UserList from '../views/user/List.vue'
import UserProfile from '../views/user/Profile.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main/:name',
      props: true,
      name: 'Main',
      component: Main,
      children:[
        {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile, props: true},
        {path: '/user/list', name: 'UserList', component: UserList}
      ]
    },
    //重定向
    {
      path: '/goHome',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
