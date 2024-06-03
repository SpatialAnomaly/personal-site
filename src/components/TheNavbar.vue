<script setup lang="ts">
import { defineProps } from 'vue'
import TheAestheticPicker from './TheAestheticPicker.vue'
import NavButton from './NavButton.vue'

defineProps<{
  navButtons: Array<{ title: string; icon: string; path: string; id: string }>
}>()
</script>

<template>
  <nav class="in-page-navbar">
    <TheAestheticPicker title="Choose Aesthetic" />
    <ul class="in-page-navbar-items">
      <li v-for="navItem in navButtons" :key="navItem.id">
        <NavButton :navItem="navItem" />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

nav.in-page-navbar {
  padding: vars.$gapM vars.$gapL;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: vars.$gapM;
  @include mixins.outer-wrap;

  ul.in-page-navbar-items {
    list-style: none;
    flex: 0 1 100%;
    margin: 0 0 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: vars.$gapS;
    & > li {
      flex: 0 0 auto;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
