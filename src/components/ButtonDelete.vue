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
    <!-- <div class="buttons">
        {{ counter }}
        <button class="increase" @click="increase">Like</button>
        <button class="decrease" @click="decrease">Dislike</button>
    </div> -->
</template>

<style scoped>
    .buttons {
      margin: 0 auto;
      width: 1170px;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        font-size: 26px;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s, color 0.3s;
    }
  
    .increase {
        background-color: #4caf50;
        color: white;
    }
  
      .decrease {
        background-color: #f44336;
        color: white;
        margin-left: 10px;
      }

      
    
</style>