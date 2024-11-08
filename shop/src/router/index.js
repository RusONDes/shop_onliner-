import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'Online_store',
      component: () => import('../views/Online_store.vue')
    }
  ]
})

export default router
