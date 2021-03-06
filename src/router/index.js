import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { // 路由重定向
    path: '/home', component: Home, redirect: '/welcome', children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
    ]
  }
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
