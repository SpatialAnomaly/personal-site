<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  altTxt: string
  wordMarkHeading: string
  wordMarkSubheading: string
  //people: string[]
}>()

//console.log('hello')

//const showPeople = ref(false)

//const emit = defineEmits(['rory'])
/*
function handleClick() {
  showPeople.value = !showPeople.value
  emit('rory')
} */
</script>

<template>
  <div class="wrap">
    <header>
      <div class="logo">
        <div class="glyph">
          <picture>
            <img src="@/assets/logo-glyph.svg" :alt="altTxt" width="125" height="125" />
          </picture>
        </div>
        <div class="wordmarks">
          <div class="wordmark-heading">{{ wordMarkHeading }}</div>
          <div class="wordmark-subheading">{{ wordMarkSubheading }}</div>
        </div>
      </div>
      <div class="socials">
        <a href=""><i class="icon-github"></i></a>
        <a href=""><i class="icon-linkedin"></i></a>
      </div>
      <!--
      <div v-if="showPeople">
        <p class="lead" v-for="person in people" :key="person">
          {{ person }}
        </p>
      </div>

      <p><a href="#" class="button" @click="handleClick()">Toggle</a></p>
      -->
    </header>
  </div>
</template>
