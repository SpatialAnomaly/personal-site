<script setup lang="ts">
import { useStyleStore } from '@/stores/aesthetics'
import { ref } from 'vue'

export type AestheticOption = {
  title: string
  data: string
}
const aetheticOptions: AestheticOption[] = [
  { title: 'Roundabout', data: 'style-roundabout' },
  { title: 'Brutal Truth', data: 'style-brute' },
  { title: '3rd Dimensional Aperture', data: 'style-skue' },
  { title: 'Lorem', data: 'style-lorem' },
  { title: 'Ipsum', data: 'style-ipsum' }
]

defineProps<{
  title: string
}>()

const showDropdown = ref(false)
const buttonIcon = ref('fa fa-caret-down')

const store = useStyleStore()

const setStyle = (style: string) => {
  store.setStyle(style)
  const body = document.getElementsByTagName('body')[0]
  body.className = body.className.replace(/style-\S+/g, '') // Remove any existing "style-" classes
  body.classList.add(style)
}
</script>

<template>
  <div class="aesthetic-picker-wrap">
    <button
      class="aesthetic-picker-button"
      @click="
        (showDropdown = !showDropdown),
          (buttonIcon = buttonIcon === 'fa fa-caret-down' ? 'fa fa-times' : 'fa fa-caret-down')
      "
    >
      <span>{{ title }}</span
      ><i :class="buttonIcon"></i>
    </button>
    <Transition name="fade">
      <div class="aesthetic-picker-dropdown" v-show="showDropdown">
        <ul>
          <li v-for="aesthetic in aetheticOptions" :key="aesthetic.data">
            <a data-style="{{aesthetic.data}}" @click="setStyle(aesthetic.data)">
              <i v-if="store.style === aesthetic.data" class="fa fa-check"></i>
              {{ aesthetic.title }}</a
            >
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;

.aesthetic-picker-wrap {
  position: relative;
  flex: 0 0 320px;
}

button.aesthetic-picker-button {
  display: flex;
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

button.aesthetic-picker-button:hover {
  background-color: vars.$yellow;
  color: vars.$blue-darker;
}

button.aesthetic-picker-button:active {
  background-color: vars.$blue-lighter;
  color: vars.$blue-darker;
}

.aesthetic-picker-dropdown {
  position: absolute;
  margin-top: 2px;
  top: 100%;
  left: 0;
  width: 100%;
  height: auto;
  padding: vars.$gapM;
  background-color: vars.$blue-darker;
  color: vars.$white;
  border-radius: 16px;
  transition: all 0.32s linear;
  z-index: 99;
  a {
    display: block;
    cursor: pointer;
  }
}

.fade-enter-active {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-active {
  opacity: 0;
  transform: translateY(16px);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

.style-brute {
  button.aesthetic-picker-button {
    background-color: vars.$white;
    color: vars.$gray-darker;
    border-radius: 0;
    box-shadow: 0 0 0px 4px vars.$gray-darker;
    transition: none;
    i {
      color: vars.$gray-darker;
    }
    &:hover {
      background-color: vars.$gray-darker;
      color: vars.$white;
      i {
        color: vars.$white;
      }
    }
    &:active {
      background-color: vars.$gray-darker;
      color: vars.$white;
    }
  }

  .aesthetic-picker-dropdown {
    background-color: vars.$white;
    color: vars.$gray-darker;
    border-radius: 0;
    box-shadow: 0 0 0px 4px vars.$gray-darker;
    transition: none;
  }
}
</style>
