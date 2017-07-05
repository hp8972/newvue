import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Demo from '@/components/demo'
import Register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
    {
        path: '/listdetail', 
        component: resolve => require(['../components/a.vue'], resolve)
        //按需加载，进那个页面加载哪个页面的js
    },
    {
        path: '/register', 
        component: Register
        //按需加载，进那个页面加载哪个页面的js
    },
  ]
})
