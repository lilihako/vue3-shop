import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {layzyPlugin} from "@/directives/index.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)
//引用图片懒加载的指令：
app.use(layzyPlugin)



app.mount('#app')
