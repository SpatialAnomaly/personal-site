<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="aesthetic-picker-wrap">
    <button class="aesthetic-picker-button">
      <span>{{ title }}</span
      ><i class="fa fa-caret-down"></i>
    </button>
    <div class="aesthetic-picker-dropdown" v-show="false">
      <ul>
        <li><a href="#">Aesthetic Option </a></li>
        <li><a href="#">Aesthetic Option </a></li>
        <li><a href="#">Aesthetic Option </a></li>
        <li><a href="#">Aesthetic Option </a></li>
        <li><a href="#">Aesthetic Option </a></li>
      </ul>
    </div>
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
}
</style>
