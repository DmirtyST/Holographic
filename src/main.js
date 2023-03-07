import { createApp } from 'vue'
import "@fontsource/inter/400.css"
import "@fontsource/inter/300.css"
import './style/global.scss'
import App from './App.vue'
import router from "./router/index";
createApp(App).use(router).mount('#app')
