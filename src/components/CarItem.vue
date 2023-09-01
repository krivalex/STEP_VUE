<script setup>
import { defineProps, computed } from 'vue'

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
  <div class="car">
    <img :src="carRemake.image" alt="car" />
    <h2>{{ carRemake.brand }}</h2>
    <p>Цена: {{ carRemake.price }}</p>
    <p>Год выпуска: {{ carRemake.year }}</p>
    <p>Объем двигателя: {{ carRemake.volume }}</p>
    <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
    <div class="chipes">
      <span v-if="Number(carRemake.price.slice(0, -1)) > 3000000">Дорогой </span>
      <span v-else-if="Number(carRemake.year) <= 1960">Старый</span>
      <span v-else>Скучный</span>
      <span v-if="changeColor(carRemake.color)">Конченный цвет</span>
    </div>
  </div>
</template>

<style scoped>
.chipes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.chipes span {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
