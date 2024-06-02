<script setup lang="ts">
import type { NavItem } from '../types/customTypes'
defineProps<{
  navItem: NavItem
}>()
</script>

<template>
  <a :href="navItem.path" :id="navItem.id" class="nav-button">
    <span>{{ navItem.title }}</span>
    <i v-if="navItem.icon" :class="navItem.icon"></i>
    <span v-else>Hello World</span>
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;

a.nav-button:link,
a.nav-button:visited {
  display: inline-flex;
  gap: vars.$em;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-size: vars.$em;
  font-weight: 700;
  font-family: vars.$font-rubik;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.8em;
  padding: 8px 32px;
  background-color: vars.$blue-darker;
  color: vars.$white;
  border-radius: 12px;
  transition: all 0.08s linear;
  span {
    flex: 0 0 auto;
  }
  i {
    flex: 0 0 auto;
    font-size: vars.$em * 1.5;
  }
}

a.nav-button:hover {
  background-color: vars.$yellow;
  color: vars.$blue-darker;
}

a.nav-button:active {
  background-color: vars.$blue-lighter;
  color: vars.$blue-darker;
}
</style>
