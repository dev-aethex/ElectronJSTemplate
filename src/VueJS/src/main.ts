import { createApp } from 'vue'
import View from './View.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(View).use(store).use(router).mount('#app')
