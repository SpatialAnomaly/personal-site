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
  line-height: vars.$em;
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
    font-family: vars.$font-bebasneue;
    font-size: vars.$em * 1.2;
    line-height: vars.$em * 1.2;
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

.style-skue {
  .button:link,
  .button:visited,
  .button {
    border-radius: 4px;
    background-color: vars.$white;
    color: vars.$gray-darker;
    border: 1px solid vars.$gray-light;
    border-bottom: 2px solid vars.$gray;
    box-shadow: 0 2px 8px -6px rgba(0, 0, 0, 0.4);
    transition: all 0.16s linear;
  }
  .button:hover {
    background-color: vars.$blue;
    color: vars.$white;
    box-shadow: 0 6px 12px -6px rgba(0, 0, 0, 0.4);
    border: 1px solid vars.$blue-darker;
    border-bottom: 2px solid vars.$blue-darker;
  }

  .button:active {
    background-color: vars.$blue-darker;
    color: vars.$white;
    box-shadow: 0 -6px 12px -6px rgba(0, 0, 0, 0.4);
  }
}
</style>
