import './assets/main.css'

import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyD6kg9j9YRdrLLLccj763mfXp35P0wfrYk',
  authDomain: 'learn-vue-e366c.firebaseapp.com',
  projectId: 'learn-vue-e366c',
  storageBucket: 'learn-vue-e366c.appspot.com',
  messagingSenderId: '577361090897',
  appId: '1:577361090897:web:dc89534f3093932522db70',
}

initializeApp(firebaseConfig)
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
