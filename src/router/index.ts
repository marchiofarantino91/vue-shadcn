import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/components/Layout/index.vue'
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: '', component: HelloWorld },
        ]
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router