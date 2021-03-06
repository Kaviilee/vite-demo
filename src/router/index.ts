import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home';
import Foo from '../components/Foo';
const Clipboard = () => import('@/components/Clipboard');
import LifeCircle from '@/components/LifeCircle.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/clipboard', component: Clipboard },
    { path: '/lifecircle', component: LifeCircle },
  ],
});
