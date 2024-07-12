import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {layzyPlugin} from "@/directives/index.js";
import {componentPlugin} from "@/components/index.js";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)


const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
//引用图片懒加载的指令：
app.use(layzyPlugin)
//使用全局组件
app.use(componentPlugin)



app.mount('#app')
