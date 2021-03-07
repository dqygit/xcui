import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/loginPage',
  component: () => import('@/views/loginPage/index.vue')
},
{
  path: '/register',
  component: () => import('@/views/register/index.vue')
}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
