<script setup lang="ts">
import type { NavButtonProps } from '../types/customTypes'
import TheAestheticPicker from './TheAestheticPicker.vue'
import TheMobileMenuTrig from './TheMobileMenuTrig.vue'
import NavButton from './NavButton.vue'
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

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

/**
 * Determines if a navigation item is active based on its ID.
 */
const activeItem = ref<string>('nav-item-work') // Default active item

function isActive(navItemId: string) {
  return activeItem.value === navItemId ? 'active' : 'inactive'
}

function handleNavItemClick(navItem: NavButtonProps) {
  activeItem.value = navItem.id // Update active item on click
  document.getElementsByTagName('title')[0].innerHTML = navItem.title
}

/**
 * Updates the value of the `windowWidth` ref with the current window width.
 */
const windowWidth = ref<number>(window.innerWidth)
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

/**
 * Toggles the state of the mobile menu.
 */
const mobileMenuState = ref<string>('inactive')

function toggleMobileMenuState() {
  mobileMenuState.value = mobileMenuState.value === 'active' ? 'inactive' : 'active'
}
</script>

<template>
  <nav class="in-page-navbar">
    <TheAestheticPicker title="Choose Aesthetic" />
    <TheMobileMenuTrig
      v-if="windowWidth <= 576"
      @click.prevent="toggleMobileMenuState"
      :state="mobileMenuState"
    />
    <ul :class="'in-page-navbar-items' + ' ' + mobileMenuState">
      <li v-for="navItem in navButtons" :key="navItem.id">
        <NavButton
          :navItem="navItem"
          :state="isActive(navItem.id)"
          @click.prevent="
            $emit('updateView', navItem.id), handleNavItemClick(navItem), toggleMobileMenuState()
          "
        />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_grid.scss' as gridvars;
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
  position: relative;
  @include mixins.outer-wrap;

  @media screen and (max-width: gridvars.$lg-breakpoint) {
    padding: vars.$gapM vars.$gapS;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
  }

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

    @media screen and (max-width: gridvars.$lg-breakpoint) {
      flex: 1 1 auto;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: space-between;
      margin: 0;
    }

    @media screen and (max-width: gridvars.$sm-breakpoint) {
      transition: all 0.32s linear;
      transform: translateY(25px);
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 99;
      padding: vars.$gapS;
      background-color: vars.$blue-darker;
      &.active {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
      }
    }

    & > li {
      flex: 0 0 auto;
      margin: 0;
      padding: 0;
      @media screen and (max-width: gridvars.$sm-breakpoint) {
        flex: 0 0 100%;
        width: 100%;
      }
    }
  }
}
</style>
