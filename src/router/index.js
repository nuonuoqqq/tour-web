import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',  //路径
        name: 'home',//名字
        component: () => import('@/views/index.vue')
    }
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes //routes:routes 缩写
})
export default router