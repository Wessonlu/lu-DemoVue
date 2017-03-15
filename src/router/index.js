import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
// import Hello from '@/components/header/header'

Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

export default new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})
