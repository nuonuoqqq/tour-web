import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import 'element-plus/theme-chalk/index.css';
import 'element-plus/dist/index.css'
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import '@/assets/font/iconfont.css'
import '@/assets/font/demo.css'

createApp(App).use(router).mount('#app')
