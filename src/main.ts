import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElLoading from './components/Loading'

import './assets/base.css'
import './assets/mimicry.css'

createApp(App).use(ElLoading)
  .use(router)
  .mount('#app')
