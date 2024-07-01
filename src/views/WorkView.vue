<script setup lang="ts">
import BaseCard from '../components/BaseCard.vue'

import { ref, onMounted } from 'vue'

const cards = ref([])

const fetchCards = async () => {
  try {
    const response = await fetch('./src/assets/cardsData.json')
    cards.value = await response.json()
  } catch (error) {
    console.error('Error fetching card data:', error)
  }
}

onMounted(() => {
  fetchCards()
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column-6 column-md-6">
        <h1>Work</h1>
      </div>
    </div>
    <div class="row">
      <BaseCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
