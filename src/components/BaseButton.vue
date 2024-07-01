<script setup lang="ts">
const props = defineProps<{
  title: string
  path: string
}>()
</script>

<template>
  <a :href="props.path" class="button">
    {{ props.title }}
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

.style-brute {
  .button:link,
  .button:visited,
  .button {
    background-color: vars.$white;
    color: vars.$gray-darker;
    border-radius: 0;
    padding: 8px 32px;
    box-shadow: 0 0 0px 4px vars.$gray-darker;
    transition: none;
  }

  .button:hover {
    background-color: vars.$gray-darker;
    color: vars.$white;
  }

  .button:active {
    background-color: vars.$gray-dark;
    color: vars.$white;
  }
}
</style>
