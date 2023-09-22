<script setup>
import { defineProps, defineEmits } from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import ColorPicker from 'primevue/colorpicker'
import { useAuto } from '../composable/useAuto'

const { updateAuto, auto: autoComposable } = useAuto()

defineProps({
  auto: {
    type: Object,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})

const emit = defineEmits('update:price')

async function updateCar(event) {
  emit('update:price', event.target.value)
  autoComposable.value.price = event.target.value
  await updateAuto()
}

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
      <img :src="auto.image" class="car-image" />
    </template>
    <template #title>{{ auto.brand }}</template>
    <template #content>
      <input type="text" :value="price" @input="updateCar" @click.stop />
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <div class="color-container">
        <p style="margin: 0px; margin-right: 10px">Цвет:</p>
        <ColorPicker v-model="auto.color" disabled />
      </div>
    </template>
    <template #footer>
      <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip v-else-if="Number(auto.year) <= 1960" label="Старый" icon="pi pi-history" />
      <Chip v-else label="Скучный" icon="pi-briefcase" />
      <Chip v-if="changeColor(auto.color)" label="Беспонтовый цвет" icon="pi pi-eye-slash" />
    </template>
  </Card>
</template>

<style scoped>
:deep(.p-card) {
  transform: perspective(1000px) !important;
  position: relative !important;
}

:deep(.p-card):hover {
  animation: transform 1s ease-in-out;
  cursor: pointer;
}

@keyframes transform {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.car-image {
  height: 168px;
  width: 278px;
}

.color-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
  border: 1px solid black;
}
</style>
