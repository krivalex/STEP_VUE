import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD6kg9j9YRdrLLLccj763mfXp35P0wfrYk',
  authDomain: 'learn-vue-e366c.firebaseapp.com',
  projectId: 'learn-vue-e366c',
  storageBucket: 'learn-vue-e366c.appspot.com',
  messagingSenderId: '577361090897',
  appId: '1:577361090897:web:dc89534f3093932522db70',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
