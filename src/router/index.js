import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Hello',
    component: resolve => require(['../components/home.vue'],resolve)
  },
  {
    path:'/hero/hero',
    name:'heroindex',
    component: resolve => require(['../components/hero/hero.vue'],resolve)
  }
]

export default new Router({
  base:'/',
  routes,
})