import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {layzyPlugin} from "@/directives/index.js";
import {useRoute} from "vue-router";
import {componentPlugin} from "@/components/index.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)
//引用图片懒加载的指令：
app.use(layzyPlugin)
//使用全局组件
app.use(componentPlugin)



app.mount('#app')
