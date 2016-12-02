import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import ratings from 'components/ratings/ratings'

import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods, name: 'goods'},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.push('goods')
