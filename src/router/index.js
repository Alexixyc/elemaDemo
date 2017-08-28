import Vue from 'vue'
import Router from 'vue-router'
// import app from '@/app'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', // 修改vue-router自带的路由按钮的active类名
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app
    // },
    {
      path: '/goods',
      name: 'goods',
      component: require('components/goods/goods')
    }, {
      path: '/ratings',
      name: 'ratings',
      component: require('components/ratings/ratings')
    }, {
      path: '/seller',
      name: 'seller',
      component: require('components/seller/seller')
    }
  ]
})
