const number = 1

const array = [1, 2, 3]
const obj = { a: 1, b: 2, c: 3 }

import { ref } from 'vue'

const func1 = (array) => {
  return array.reverse()
}

function func2(array) {
  return array.reverse()
}

function get() {
  const response = fetch('https://api.github.com/users')
  const data = response.json()
  return data
}

async function get() {
  const response = await fetch('https://api.github.com/users')
  const data = await response.json()
  return data
}

async function get() {
  try {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

const user = ref(null)

async function getUser() {
  const res = await fetch('https://api.github.com/users')
  return res ? (user.value = res) : (user.value = null)
}
