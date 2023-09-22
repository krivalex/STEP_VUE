<template>
  <div v-if="!auto">
    <Skeleton width="100vw"></Skeleton>
  </div>
  <div v-if="auto">
    {{ auto }}
  </div>
</template>

<script setup>
import { useAuto } from '../composable/useAuto'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Skeleton from 'primevue/skeleton'

const { auto, getAuto, loading } = useAuto()
const route = useRoute()

onMounted(async () => {
  console.log(route)
  await getAuto(route.params.id)
})
</script>
