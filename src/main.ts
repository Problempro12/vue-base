import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css' // или './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
