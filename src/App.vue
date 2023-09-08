<script setup>
import CarList from '@/components/CarList.vue'
import CarTable from './components/CarTable.vue'
import Navbar from './components/layouts/Navbar.vue'

const cars = [
  {
    brand: 'BMW',
    price: '2000000',
    year: 1994,
    volume: 2.4,
    color: '#FF0000',
    criticalNumber: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s',
  },
  {
    brand: 'Audi',
    price: '1000000',
    year: 2000,
    volume: 2.0,
    color: '#00FF00',
    criticalNumber: 2,
    image: 'https://www.cars.com/i/large/in/v2/stock_photos/66b70294-8e4a-4c5f-bca4-e1c7fcfc2aa2/d9e86d5c-25d2-48af-b643-fb99725067f2.png',
  },
]
</script>

<template>
  <Navbar />
  <CarList :cars="cars" />
  <CarTable :cars="cars" />
</template>

<style scoped></style>
