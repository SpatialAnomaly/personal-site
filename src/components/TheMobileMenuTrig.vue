<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const props = defineProps<{
  state: string
}>()

const mobileMenuState = ref<string>(props.state)
watchEffect(() => {
  mobileMenuState.value = props.state
})

const iconHandler = ref<string>('fa fa-bars')
function getIconClass(state: string) {
  if (state === 'active') {
    iconHandler.value = 'fa fa-bars'
  } else {
    iconHandler.value = 'fa fa-times'
  }
}
</script>

<template>
  <button
    :class="'mobile-menu-trigger' + ' ' + mobileMenuState"
    @click="getIconClass(mobileMenuState)"
  >
    <i :class="iconHandler"></i>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_grid.scss' as gridvars;

button.mobile-menu-trigger {
  flex: 0 0 auto;
  margin-left: auto;
  color: vars.$white;
  @media screen and (max-width: gridvars.$sm-breakpoint) {
    display: inline-block;
  }
}
</style>
