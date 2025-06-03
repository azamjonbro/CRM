import { createApp } from 'vue'
import './assets/Css/style.css'
import router from './Router'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
