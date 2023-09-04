<script setup>
import { defineProps, computed } from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
})

const carRemake = computed(() => {
  return {
    ...props.car,
    price: props.car.price + ' ₽',
  }
})

function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
  if (crappyColors.includes(color)) {
    return true
  }
  return false
}
</script>

<template>
  <Card>
    <template #header>
      <img :src="carRemake.image" alt="car" class="car-image" />
    </template>
    <template #title> {{ carRemake.brand }} </template>
    <template #content>
      <p>Цена: {{ carRemake.price }}</p>
      <p>Год выпуска: {{ carRemake.year }}</p>
      <p>Объем двигателя: {{ carRemake.volume }}</p>
      <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
    </template>
    <template #footer>
      <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip icon="pi pi-history" label="Старый" v-else-if="Number(carRemake.year) <= 1960" />
      <Chip icon="pi pi-briefcase" label="Скучный" v-else />
      <Chip icon="pi pi-eye-slash" label="Конченный цвет" v-if="changeColor(carRemake.color)" />
    </template>
  </Card>
</template>

<style scoped></style>
