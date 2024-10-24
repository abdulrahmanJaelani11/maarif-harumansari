
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.config.globalProperties.$api = 'http://localhost:3000/api/'
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
