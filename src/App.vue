<script setup lang="ts">
import type { SocialItem } from './types/customTypes'

import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import BaseButton from './components/BaseButton.vue'
import BaseCard from './components/BaseCard.vue'

// Fonts
import '@fontsource/platypi'
import '@fontsource/rubik'

import { computed, ref } from 'vue'
import { onMounted } from 'vue'
/*
function onRory() {
  alert('toot')
}
*/

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

type CurrentView = 'nav-item-work' | 'nav-item-bio' | 'nav-item-contact'
const currentView = ref<CurrentView>('nav-item-work')

// Cards
const cards = ref([])

const fetchCards = async () => {
  try {
    const response = await fetch('./src/assets/cardsData.json')
    cards.value = await response.json()
  } catch (error) {
    console.error('Error fetching card data:', error)
  }
}

onMounted(() => {
  fetchCards()
})

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

Break the cards up into their own component-s

How would one handle something global like a site name?

Explore routing
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
  <!-- Work -->
  <Transition name="fade">
    <section v-if="currentView === 'nav-item-work'" class="content">
      <div class="container">
        <div class="row">
          <div class="column-6 column-md-6">
            <h1>Work</h1>
          </div>
        </div>
        <div class="row">
          <BaseCard v-for="(card, index) in cards" :key="index" :card="card" />
        </div>
      </div>
    </section>
  </Transition>
  <!-- End Work -->
  <!-- Bio -->
  <Transition name="fade">
    <section v-if="currentView === 'nav-item-bio'" class="content">
      <div class="container">
        <div class="row">
          <div class="column-6 column-md-4">
            <h1>Bio</h1>
          </div>
        </div>
        <div class="row">
          <div class="column-2 column-md-2">
            <picture>
              <!-- Large devices (≥992px) -->
              <source srcset="https://placehold.co/1200x1200" media="(min-width: 992px)" />
              <!-- Medium devices (≥577px and <992px) -->
              <source srcset="https://placehold.co/800x800" media="(min-width: 577px)" />
              <!-- Small devices (<577px) -->
              <source srcset="https://placehold.co/400x400" media="(max-width: 576px)" />
              <!-- Default image if none of the above media queries match -->
              <img src="https://placehold.co/800x800" alt="An image placeholder" />
            </picture>
          </div>
          <div class="column-4 column-md-2">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eius, excepturi
              nobis animi aut dolores esse reprehenderit molestiae quis? Fuga illo commodi
              doloremque odio aspernatur, eos sit tempora expedita autem.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In impedit illo non commodi
              molestiae similique itaque deleniti perferendis, dolores asperiores magnam? Adipisci
              alias exercitationem facilis magni blanditiis deleniti incidunt laboriosam?
            </p>
          </div>
        </div>
        <div class="row">
          <div class="column-2 column-md-2">
            <h3>Soft Skills</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
          <div class="column-2 column-md-2">
            <h3>UX / UI Visual Design</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
          <div class="column-2 column-md-2">
            <h3>Front-End</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Transition>
  <!-- End Bio -->
  <!-- Contact -->
  <Transition name="fade">
    <section v-if="currentView === 'nav-item-contact'" class="content">
      <div class="container">
        <div class="row">
          <div class="column-6 column-md-6">
            <h1>Contact</h1>
            <form>
              <div class="form-element">
                <div class="form-label">
                  <label>Something Label Blah</label>
                </div>
                <div class="form-control">
                  <input type="text" placeholder="hello world" />
                </div>
              </div>
              <div class="form-element">
                <div class="form-label">
                  <label>Something Label Blah</label>
                </div>
                <div class="form-control">
                  <input type="text" placeholder="hello world" />
                </div>
              </div>
              <div class="form-element">
                <div class="form-label">
                  <label>Something Label Blah</label>
                </div>
                <div class="form-control">
                  <input type="text" placeholder="hello world" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Transition>
  <!-- End Contact -->
  <TheFooter
    notice="lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar "
  />
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

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
</style>
