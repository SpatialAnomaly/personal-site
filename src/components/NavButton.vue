<script setup lang="ts">
import type { NavButtonProps } from '../types/customTypes'
import { defineProps } from 'vue'
const props = defineProps<{
  navItem: NavButtonProps
  state: string
}>()
</script>

<template>
  <button :id="props.navItem.id" :class="'nav-button ' + props.state">
    <span>{{ props.navItem.title }}</span>
    <i :class="props.navItem.icon"></i>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_grid.scss' as gridvars;

.nav-button,
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
  line-height: vars.$em;
  font-weight: 700;
  font-family: vars.$font-rubik;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 32px;
  background-color: vars.$blue-darker;
  color: vars.$white;
  border-radius: 12px;
  transition: all 0.08s linear;
  cursor: pointer;

  span {
    flex: 0 0 auto;
    @media screen and (max-width: gridvars.$sm-breakpoint) {
      order: 1;
    }
  }
  i {
    flex: 0 0 auto;
    font-size: vars.$em * 1.5;
    @media screen and (max-width: gridvars.$sm-breakpoint) {
      order: 0;
    }
  }

  @media screen and (max-width: gridvars.$sm-breakpoint) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
}

.nav-button.active,
a.nav-button.active,
.nav-button:hover,
a.nav-button:hover {
  background-color: vars.$yellow;
  color: vars.$blue-darker;
}

.nav-button:active,
a.nav-button:active {
  background-color: vars.$blue-lighter;
  color: vars.$blue-darker;
}

.style-brute {
  .nav-button,
  a.nav-button:link,
  a.nav-button:visited {
    border-radius: 0;
    background-color: vars.$white;
    color: vars.$gray-darker;
    box-shadow: 0 0 0px 4px vars.$gray-darker;
    font-family: vars.$font-bebasneue;
    font-size: vars.$em * 1.2;
    line-height: vars.$em * 1.2;
  }

  .nav-button.active,
  a.nav-button.active,
  .nav-button:hover,
  a.nav-button:hover {
    background-color: vars.$gray-darker;
    color: vars.$white;
  }

  .nav-button.active,
  a.nav-button.active {
    cursor: not-allowed;
  }

  .nav-button:active,
  a.nav-button:active {
    background-color: vars.$gray-darker;
    color: vars.$white;
  }
}

.style-skue {
  .nav-button,
  a.nav-button:link,
  a.nav-button:visited {
    border-radius: 4px;
    background-color: vars.$white;
    color: vars.$gray-darker;
    border: 1px solid vars.$gray-light;
    border-bottom: 2px solid vars.$gray;
    box-shadow: 0 2px 8px -6px rgba(0, 0, 0, 0.4);
    transition: all 0.16s linear;
    letter-spacing: normal;
  }

  .nav-button.active,
  a.nav-button.active,
  .nav-button:hover,
  a.nav-button:hover {
    background-color: vars.$blue;
    color: vars.$white;
    box-shadow: 0 6px 12px -6px rgba(0, 0, 0, 0.4);
    border: 1px solid vars.$blue-darker;
    border-bottom: 2px solid vars.$blue-darker;
  }

  .nav-button.active,
  a.nav-button.active {
    cursor: not-allowed;
  }

  .nav-button:active,
  a.nav-button:active {
    background-color: vars.$blue-darker;
    color: vars.$white;
    box-shadow: 0 -6px 12px -6px rgba(0, 0, 0, 0.4);
  }
}
</style>
