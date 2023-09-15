<script setup>
import CarItem from '@/components/CarItem.vue'
import { useAuto } from '../composable/useAuto'
import { onMounted } from 'vue'

const { autoListRemake, getAutoList } = useAuto()

onMounted(async () => {
  await getAutoList()
})
</script>

<template>
  <section class="cars" v-for="auto in autoListRemake" :key="auto">
    <CarItem :auto="auto" />
  </section>
</template>

<style scoped></style>
