<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type { NavItem, SocialItem } from './types/customTypes'

import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

// Fonts
import '@fontsource/platypi'
import '@fontsource/rubik'

import { computed, ref } from 'vue'
/* 
function onRory() {
  alert('toot')
}
*/

const navItems: NavItem[] = [
  {
    title: 'Work',
    icon: 'fa-solid fa-gear',
    path: '/work',
    id: 'nav-item-work'
  },
  {
    title: 'Bio',
    icon: 'fa-solid fa-info-circle',
    path: '/bio',
    id: 'nav-item-bio'
  },
  {
    title: 'Contact',
    icon: 'fa-solid fa-envelope',
    path: '/contact',
    id: 'nav-item-contact'
  }
]

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
Help clean up workspace

Help organize the custom types so they are easier to manage.

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

  <TheNavbar :navButtons="navItems" />

  <section id="content-work" class="content">
    <div class="container">
      <div class="row">
        <div class="column-6 column-md-6">
          <h1>Work</h1>
        </div>
      </div>
      <div class="row">
        <!-- Card 1 -->
        <div class="column-3 column-md-2">
          <div class="card card-red">
            <div class="card-thumb">
              <picture>
                <!-- Large devices (≥992px) -->
                <source srcset="https://placehold.co/1600x1200" media="(min-width: 992px)" />
                <!-- Medium devices (≥577px and <992px) -->
                <source srcset="https://placehold.co/800x600" media="(min-width: 577px)" />
                <!-- Small devices (<577px) -->
                <source srcset="https://placehold.co/400x300" media="(max-width: 576px)" />
                <!-- Default image if none of the above media queries match -->
                <img src="https://placehold.co/800x600" alt="An image placeholder" />
              </picture>
              <a href="#" class="card-thumb-link" tite="Card Thumb Link Title"></a>
            </div>
            <div class="card-content">
              <div class="card-title">
                <h3>Hello World This Is The Card Title And It's a Long Title</h3>
              </div>
              <div class="card-desc">
                <p>
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
                  sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                  condimentum velit, sit amet feugiat lectus.
                </p>
              </div>
              <div class="card-action">
                <BaseButton title="Learn More" path="#" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="column-3 column-md-2">
          <div class="card card-yellow">
            <div class="card-thumb">
              <picture>
                <!-- Large devices (≥992px) -->
                <source srcset="https://placehold.co/1600x1200" media="(min-width: 992px)" />
                <!-- Medium devices (≥577px and <992px) -->
                <source srcset="https://placehold.co/800x600" media="(min-width: 577px)" />
                <!-- Small devices (<577px) -->
                <source srcset="https://placehold.co/400x300" media="(max-width: 576px)" />
                <!-- Default image if none of the above media queries match -->
                <img src="https://placehold.co/800x600" alt="An image placeholder" />
              </picture>
              <a href="#" class="card-thumb-link" tite="Card Thumb Link Title"></a>
            </div>
            <div class="card-content">
              <div class="card-title">
                <h3>Hello World This Is The Card Title And It's a Long Title</h3>
              </div>
              <div class="card-desc">
                <p>
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
                  sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                  condimentum velit, sit amet feugiat lectus.
                </p>
              </div>
              <div class="card-action">
                <BaseButton title="Learn More" path="#" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="column-3 column-md-2">
          <div class="card card-yellow">
            <div class="card-thumb">
              <picture>
                <!-- Large devices (≥992px) -->
                <source srcset="https://placehold.co/1600x1200" media="(min-width: 992px)" />
                <!-- Medium devices (≥577px and <992px) -->
                <source srcset="https://placehold.co/800x600" media="(min-width: 577px)" />
                <!-- Small devices (<577px) -->
                <source srcset="https://placehold.co/400x300" media="(max-width: 576px)" />
                <!-- Default image if none of the above media queries match -->
                <img src="https://placehold.co/800x600" alt="An image placeholder" />
              </picture>
              <a href="#" class="card-thumb-link" tite="Card Thumb Link Title"></a>
            </div>
            <div class="card-content">
              <div class="card-title">
                <h3>Hello World This Is The Card Title And It's a Long Title</h3>
              </div>
              <div class="card-desc">
                <p>
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
                  sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                  condimentum velit, sit amet feugiat lectus.
                </p>
              </div>
              <div class="card-action">
                <BaseButton title="Learn More" path="#" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="column-3 column-md-2">
          <div class="card card-red">
            <div class="card-thumb">
              <picture>
                <!-- Large devices (≥992px) -->
                <source srcset="https://placehold.co/1600x1200" media="(min-width: 992px)" />
                <!-- Medium devices (≥577px and <992px) -->
                <source srcset="https://placehold.co/800x600" media="(min-width: 577px)" />
                <!-- Small devices (<577px) -->
                <source srcset="https://placehold.co/400x300" media="(max-width: 576px)" />
                <!-- Default image if none of the above media queries match -->
                <img src="https://placehold.co/800x600" alt="An image placeholder" />
              </picture>
              <a href="#" class="card-thumb-link" tite="Card Thumb Link Title"></a>
            </div>
            <div class="card-content">
              <div class="card-title">
                <h3>Hello World This Is The Card Title And It's a Long Title</h3>
              </div>
              <div class="card-desc">
                <p>
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                  dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
                  sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                  condimentum velit, sit amet feugiat lectus.
                </p>
              </div>
              <div class="card-action">
                <BaseButton title="Learn More" path="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content-bio" class="content">
      <div class="container">
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
            <h1>BIO: Lorem ipsum dolor sit amet.</h1>
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
    </div>

    <div id="content-contact" class="content">
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
    </div>
  </section>

  <TheFooter
    notice="lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar "
  />

  <!--

    <h1>{{ 'Test H1' }}</h1>
      <h2 :style="currentColor">My Color Changes</h2>
      <button @click="clickCount += 1">{{ clickCount }}</button>
      <h3>Test H3</h3>
      <h4>Test H4</h4>
      <h5>Test H5</h5>
      <h6>Test H6</h6>


  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper my-class">
      <HelloWorld msg="Rory Hurlburt Testing" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  -->
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

.content {
  padding: vars.$gapL 0;
}

// Card
.card {
  position: relative;

  .card-thumb {
    position: relative;
    picture {
      display: block;
      border-radius: 32px;
      margin-bottom: 8px;
      overflow: hidden;
      width: 100%;
      height: auto;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    a.card-thumb-link {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:before {
      content: ' ';
      display: block;
      z-index: -1;
      position: absolute;
      top: 32px;
      left: -3%;
      width: 106%;
      height: 106%;
      border-radius: 32px;
    }
  }

  &.card-red {
    .card-thumb:before {
      background-color: vars.$red;
    }
  }

  &.card-yellow {
    .card-thumb:before {
      background-color: vars.$yellow;
    }
  }

  .card-content {
    background-color: vars.$blue-darker;
    padding: vars.$gapM;
    border-radius: 32px;
    position: relative;
  }
}
</style>
