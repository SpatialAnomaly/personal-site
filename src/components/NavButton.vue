<script lang="ts">
export type NavButtonProps = {
  title: string
  icon: string
  path: string
  id: string
}
</script>

<script setup lang="ts">
const props = defineProps<{
  navItem: NavButtonProps
  state: string
}>()
</script>

<template>
  <a :id="props.navItem.id" :class="'nav-button ' + props.state">
    <span>{{ props.navItem.title }}</span>
    <i :class="props.navItem.icon"></i>
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;

a.nav-button,
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
  cursor: pointer;

  span {
    flex: 0 0 auto;
  }
  i {
    flex: 0 0 auto;
    font-size: vars.$em * 1.5;
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
</style>
