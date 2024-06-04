<script setup lang="ts">
import TheAestheticPicker from './TheAestheticPicker.vue'
import NavButton, { type NavButtonProps } from './NavButton.vue'

const navButtons: NavButtonProps[] = [
  {
    title: 'Work',
    icon: 'fa-solid fa-gear',
    path: '/work',
    id: 'nav-item-work'
  },
  {
    title: 'Bio',
    icon: 'fa-solid fa-info-circle',
    path: '/bio',
    id: 'nav-item-bio'
  },
  {
    title: 'Contact',
    icon: 'fa-solid fa-envelope',
    path: '/contact',
    id: 'nav-item-contact'
  }
]
</script>

<template>
  <nav class="in-page-navbar">
    <TheAestheticPicker title="Choose Aesthetic" />
    <ul class="in-page-navbar-items">
      <li v-for="navItem in navButtons" :key="navItem.id">
        <NavButton :navItem="navItem" @click.prevent="$emit('updateView', navItem.title)" />
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
