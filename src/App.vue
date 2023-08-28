<script setup>
import {ref} from 'vue'
const counter = ref(0)

const increase = () => {
  counter.value++
}

const decrease = () => {
  counter.value--
}

</script>

<template>
  <div class="test">
    {{ counter }}
    <button @click="increase">Увеличить</button>
    <button @click="decrease">Уменьшить</button>
  </div>
  <audio controls>
    <source src="odium.mp3" type="audio/mpeg" />
    <p>
      Ваш браузер не поддерживает HTML5 аудио. Вот взамен
      <a href="myAudio.mp4">ссылка на аудио</a>
    </p>
  </audio>
</template>

<style scoped>

</style>
