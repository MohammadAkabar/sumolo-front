import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component : Home,  
    },
    {
      path: '/About',
      component: About,
    }
  ]
})

export default router
