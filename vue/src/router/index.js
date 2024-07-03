import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/counter',
    component: () => import("@/views/CounterView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory('v2'),
  routes,
})

export default router;