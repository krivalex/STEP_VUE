<script setup>
import CarItem from '@/components/CarItem.vue'
import { defineProps } from 'vue'

defineProps({
  cars: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="cars" v-for="car in cars" :key="car">
    <CarItem :car="car" />
  </section>
</template>

<style scoped></style>
