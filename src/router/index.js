import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import MarkdownPage from '../views/MarkdownPage.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },{
        path: '/articles',
        component: Articles
    },{
        path: "/markdown",
        component: MarkdownPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;