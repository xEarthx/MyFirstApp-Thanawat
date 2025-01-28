import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';
import MemoriesDetail from '../pages/MemoriesDetail.vue';
import AddMemories from '../pages/AddMemories.vue';

const routes = [
  {
    path:'/',
    redirect: '/memories'
  },
  {
    path:'/memories',
    component: MemoriesPage
  },
  {
    path: '/addmemories',
    component: AddMemories
  },
  {
    path: '/memories/:id',
    component: () => import ('../pages/MemoriesDetail.vue')
  },
  {
    path: '/memories/add',
    component:() => import('../pages/AddMemories.vue')
  }
] 

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
