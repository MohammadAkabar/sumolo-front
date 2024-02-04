import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Dashboard from '../views/Dashboard.vue'
import AssetDetail from '../components/Items/AssetDetail.vue'
import AssetsPage from '../views/AssetsPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import UserAssets from '../views/UserAssets.vue'
import EditAsset from '../views/EditAsset.vue'
import RegisterAsset from '../views/RegisterAsset.vue'
import WildcardPage from '../components/WildcardPage.vue'
import UsersData from '../views/DashboardUsersContent.vue'
import AssetsData from '../views/DashboardAssetsContent.vue'
import WakafData from '../views/DashboardWakafsContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:catchAll(.*)',
      component: WildcardPage
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    // {
    //   path: '/Admin',
    //   component: Dashboard
    // },
    {
      path: '/DetailAsset/:id',
      component: AssetDetail
    },
    {
      path: '/all-assets',
      component: AssetsPage
    },
    {
      path: '/assets/user/:id',
      component: UserAssets
    },
    {
      path: '/profile/:id',
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        const isLoggingUID = localStorage.getItem('id')
        const paramsUID = to.params.id

        if (isLoggingUID === paramsUID) {
          next()
        } else {
          next('/not-authorized')
        }
      }
    },
    {
      path: '/EditAsset/:id',
      component: EditAsset
    },
    {
      path: '/register-asset',
      component: RegisterAsset
    },
    {
      path: '/admin-dashboard',
      component: Dashboard
    },
    {
      path: '/admin/users',
      component: UsersData
    },
    {
      path: '/admin/assets',
      component: AssetsData
    },

    {
      path: '/admin/wakafs',
      component: WakafData
    }
  ]
})
//to Url, from url,next url
// ...

router.beforeEach((to, _, next) => {
  //navguard
  const isLogin = !!localStorage.getItem('access_token')
  const title = to.meta.title

  if (title) {
    document.title = title
  } else {
    document.title = 'Sumolo'
  }

  if (isLogin && to.path === '/login') {
    next('/')
  } else if (!isLogin && to.path !== '/login' && to.path !== '/Register') {
    next('/login')
  } else {
    next()
  }
})
// ...

export default router
