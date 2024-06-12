<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  altTxt: string
  wordMarkHeading: string
  wordMarkSubheading: string
  socials: Array<{ title: string; icon: string; path: string }>
}>()

//console.log('hello')

//const showPeople = ref(false)

//const emit = defineEmits(['rory'])
/*
function handleClick() {
  showPeople.value = !showPeople.value
  emit('rory')
} */
</script>

<template>
  <header>
    <div class="logo">
      <div class="glyph">
        <picture>
          <img src="@/assets/logo-glyph.svg" :alt="altTxt" width="125" height="125" />
        </picture>
      </div>
      <div class="wordmarks">
        <div class="wordmark-heading">{{ wordMarkHeading }}</div>
        <div class="wordmark-subheading">{{ wordMarkSubheading }}</div>
      </div>
    </div>
    <ul class="socials">
      <li v-for="socialItem in socials" :key="socialItem.title">
        <a :href="socialItem.path" target="_blank" :title="socialItem.title">
          <i :class="socialItem.icon"></i>
        </a>
      </li>
    </ul>
    <!--
      <div v-if="showPeople">
        <p class="lead" v-for="person in people" :key="person">
          {{ person }}
        </p>
      </div>

      <p><a href="#" class="button" @click="handleClick()">Toggle</a></p>
      -->
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

header {
  padding: vars.$gapL;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: vars.$gapM;
  @include mixins.outer-wrap;

  .logo {
    flex: 0 0 360px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: vars.$gapS;

    .glyph {
      flex: 0 0 84px;
      picture {
        display: block;
        img {
          display: block;
        }
      }
    }

    .wordmarks {
      flex: 0 1 100%;
      .wordmark-heading {
        font-size: 28px;
        line-height: 36px;
        font-family: vars.$font-platypi;
      }
      .wordmark-subheading {
        font-size: 10px;
        line-height: 16px;
        text-transform: uppercase;
        font-weight: 700;
        font-family: vars.$font-rubik;
        letter-spacing: 0.3em;
      }
    }
  }

  ul.socials {
    flex: 0 1 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-end;
    gap: vars.$gapS;
    margin: 0;
    padding: 0;
    list-style: none;
    & > li {
      padding: 0;
      margin: 0;
      flex: 0 0 auto;
      font-size: 24px;
    }
  }
}
</style>
