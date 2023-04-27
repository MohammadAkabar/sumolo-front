import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/LoginPage.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Admin',
      component: Dashboard
    }
  ]
})
//to Url, from url,next url
router.beforeEach((to, _, next) => {
  //navguard
  const isLogin = !!localStorage.getItem('access_token')
  const title = to.meta.title

  if (title) {
    document.title = title
  } else {
    document.title = 'Sumolo'
  }

  if (isLogin && to.path === '/Login') {
    next('/')
  } else if (!isLogin && to.path !== '/Login') {
    next('/login')
  } else {
    next()
  }
})

export default router
