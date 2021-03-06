import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/create',
    component: () => import('../pages/MemoryCreatePage.vue')
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoryPage.vue')
    /* lazy loading, dynamically import from the pages directory 
    only download this component when we really need it */
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
