import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   component : Home,  
    // },
    {
      path: '/About',
      component: About,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path:'/Admin',
      component: Dashboard,
    }
  ]
})

export default router
