import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)//全局注册
// 使用路由的方式是在需要跳转时 this.$router.push({path: '/musicLyrics'})，或者使用 router-link 标签

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/musicLyrics',
    name: 'musicLyrics',
    component: () => import('../views/MusicLyrics.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
