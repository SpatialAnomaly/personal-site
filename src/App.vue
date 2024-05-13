<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

// Fonts
import '@fontsource/platypi'
import '@fontsource/rubik'
import '@fontsource/material-icons'
</script>

<template>
  <TheHeader
    altTxt="Rory Hurlburt - Some Title Blah"
    wordMarkHeading="Rory Hurlburt"
    wordMarkSubheading="Some Kind of Subheading"
  />

  <TheNavbar />

  <section class="content">
    <div class="content-work">
      <h1>Test H1</h1>
      <h2>Test H2</h2>
      <h3>Test H3</h3>
      <h4>Test H4</h4>
      <h5>Test H5</h5>
      <h6>Test H6</h6>
      <p class="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, temporibus dolorum
        repudiandae sapiente eligendi odit debitis illum quibusdam laboriosam obcaecati nulla ab,
        sit dolor dolore, officia perspiciatis vel animi explicabo?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, temporibus dolorum
        repudiandae sapiente eligendi odit debitis illum quibusdam laboriosam obcaecati nulla ab,
        sit dolor dolore, officia perspiciatis vel animi explicabo?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, temporibus dolorum
        repudiandae sapiente eligendi odit debitis illum quibusdam laboriosam obcaecati nulla ab,
        sit dolor dolore, officia perspiciatis vel animi explicabo?
      </p>
      <p><a href="#" class="button">Hello World</a></p>
    </div>
    <div class="content-bio"></div>
    <div class="content-contact"></div>
  </section>

  <TheFooter />

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
