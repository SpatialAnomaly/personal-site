<script setup lang="ts">
import type { BaseButton } from '../types/customTypes'

defineProps<{
  baseButton: BaseButton
}>()
</script>

<template>
  <a :href="baseButton.path" class="button">
    {{ baseButton.title }}
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;

.button:link,
.button:visited,
.button {
  display: inline-block;
  font-size: vars.$em;
  font-weight: 700;
  font-family: vars.$font-rubik;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.8em;
  padding: 4px 32px;
  background-color: vars.$white;
  color: vars.$blue;
  border-radius: 12px;
  transition: all 0.08s linear;
}

.button:hover {
  background-color: vars.$gray-lighter;
  color: vars.$blue-darker;
}

.button:active {
  background-color: vars.$blue-lighter;
  color: vars.$white;
}
</style>
