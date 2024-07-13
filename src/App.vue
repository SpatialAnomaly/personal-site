<script setup lang="ts">
// Types
import type { SocialItem } from './types/customTypes'

// Components
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import WorkView from './views/WorkView.vue'
import BioView from './views/BioView.vue'
import ContactView from './views/ContactView.vue'

// Fonts
import '@fontsource/platypi'
import '@fontsource/rubik'
import '@fontsource/bebas-neue'
import '@fontsource/outfit'

import { ref } from 'vue'

/*
function onRory() {
  alert('toot')
}
*/

// Social Links
const socialItems: SocialItem[] = [
  {
    title: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    path: 'https://www.linkedin.com/in/roryhurlburt/'
  },
  {
    title: 'Github',
    icon: 'fa-brands fa-github',
    path: 'https://github.com/SpatialAnomaly'
  }
]

// Navbar
type CurrentView = 'nav-item-work' | 'nav-item-bio' | 'nav-item-contact'
const currentView = ref<CurrentView>('nav-item-work')

/*
const clickCount = ref(0)
const currentColor = computed(() => {
  if (clickCount.value > 5) {
    return 'color:green'
  } else if (clickCount.value > 8) {
    return 'color:red'
  }
  return 'color:yellow'
})
*/

// TODO
/*

Explore Nuxt
Nuxt, SSR Server Side Rendering

Explore routing amd what happens when a user clicks a card

Contact Form handling

Am I loading fonts correctly?
*/
</script>

<template>
  <TheHeader
    altTxt="Rory Hurlburt - Some Title Blah"
    wordMarkHeading="Rory Hurlburt"
    wordMarkSubheading="Some Kind of Subheading"
    :socials="socialItems"
  />

  <TheNavbar @updateView="currentView = $event" />
  <main id="app-content">
    <!-- Work -->
    <Transition name="fade">
      <section v-if="currentView === 'nav-item-work'" class="content">
        <WorkView />
      </section>
    </Transition>
    <!-- End Work -->
    <!-- Bio -->
    <Transition name="fade">
      <section v-if="currentView === 'nav-item-bio'" class="content">
        <BioView
          :image="{
            large: 'https://placehold.co/1200x1200',
            medium: 'https://placehold.co/800x800',
            small: 'https://placehold.co/600x600'
          }"
        />
      </section>
    </Transition>
    <!-- End Bio -->
    <!-- Contact -->
    <Transition name="fade">
      <section v-if="currentView === 'nav-item-contact'" class="content">
        <ContactView />
      </section>
    </Transition>
    <!-- End Contact -->
  </main>
  <TheFooter
    notice="lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar "
  />
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

#app-content {
  min-height: 70vh;
}

.content {
  padding: vars.$gapL 0;
  transition: all 0.32s linear;
}

.fade-enter-active {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.style-brute {
  .content {
    transition: none;
  }
}

.style-skue {
  .content {
    transition: all 0.16s linear;
  }
}
</style>
