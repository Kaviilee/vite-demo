import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Foo from '../components/Foo.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo }
    ]
})