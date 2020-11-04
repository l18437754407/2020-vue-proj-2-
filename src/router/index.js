import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]


const router = new VueRouter({
  routes
})
// 挂在路由导航守卫  挂载失败了

// router.beforeEach((to, from, next) => {
//   if(to.push === '/login') return next()
//   const tonkenStr = window.sessionStorage.getItem('token')
//   if (!tonkenStr) return next ('/login')
//   next()
//   })
  
export default router
