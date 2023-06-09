import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Login from '../views/LoginPage.vue'
import Dashboard from '../views/Dashboard.vue'
import AssetDetail from '../components/Items/AssetDetail.vue'
import AssetsPage from '../views/AssetsPage.vue'

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
    },
    {
      path: '/DetailAsset/:id',
      component: AssetDetail
    },
    {
      path: '/all-assets',
      component: AssetsPage
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
