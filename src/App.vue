<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

// Fonts
import '@fontsource/platypi'
import '@fontsource/rubik'

import { ref } from 'vue'
/*
const people = ['fred', 'wilma', 'dino']
 
function onRory() {
  alert('toot')
}
*/

const navItems = [
  {
    title: 'Work',
    icon: 'fa-solid fa-gear',
    path: '/work',
    id: 'nav-item-work'
  },
  {
    title: 'Bio',
    icon: 'fa-solid fa-circle-info',
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

const socialItems = [
  {
    title: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    path: 'https://www.linkedin.com/in/roryhurlburt/'
  },
  {
    title: 'Github',
    icon: 'fa-brands fa-linkedin',
    path: 'https://github.com/SpatialAnomaly'
  }
]
</script>

<template>
  <TheHeader
    altTxt="Rory Hurlburt - Some Title Blah"
    wordMarkHeading="Rory Hurlburt"
    wordMarkSubheading="Some Kind of Subheading"
  />
  <!--
  <TheHeader
    altTxt="Rory Hurlburt - Some Title Blah"
    wordMarkHeading="Rory Hurlburt"
    wordMarkSubheading="Some Kind of Subheading"
    :people="people"
    @rory="onRory()"
  />
-->

  <TheNavbar :navButtons="navItems" />

  <section class="content">
    <div class="content-work">
      <h1>{{ 'Test H1' }}</h1>
      <h2>Test H2</h2>
      <h3>Test H3</h3>
      <h4>Test H4</h4>
      <h5>Test H5</h5>
      <h6>Test H6</h6>
    </div>
    <div class="content-bio"></div>
    <div class="content-contact"></div>
  </section>

  <TheFooter
    notice="lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar lorem ipsum sit dolar "
  />

  <!--
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
/* 
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  &.my-class {
    background-color: #bada55;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
*/
</style>
