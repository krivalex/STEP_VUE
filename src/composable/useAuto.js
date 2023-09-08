import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'

export const useAuto = () => {
  const auto = ref(null)
  const autoList = ref([])
  const newAuto = ref({})

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function createAuto() {
    loading.value.newAuto = true
    newAuto.value = {
      name: 'Toyota',
      model: 'Corolla',
    }
    console.log(newAuto.value)
    const columns = collection(db, 'autos')
    console.log(columns)
    const docRef = await addDoc(columns, newAuto.value)
    console.log(docRef)
    return docRef.id
  }

  return {
    createAuto,
  }
}
