import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.tsx';
import Foo from '@/views/Foo.tsx';
const Clipboard = () => import('@/views/Clipboard.tsx');
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
