<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
interface ImageSrcset {
  small: string
  medium: string
  large: string
}

const props = defineProps<{
  image: ImageSrcset
}>()

const store = useCounterStore()
</script>

<template>
  <div class="row">
    <div class="column-2 column-md-2">
      <picture>
        <!-- Large devices (≥992px) -->
        <source :srcset="image.large" media="(min-width: 992px)" />
        <!-- Medium devices (≥577px and <992px) -->
        <source :srcset="image.medium" media="(min-width: 577px)" />
        <!-- Small devices (<577px) -->
        <source :srcset="image.small" media="(max-width: 576px)" />
        <!-- Default image if none of the above media queries match -->
        <img :src="image.large" alt="Rory Hurlburt" />
      </picture>
    </div>
    <div class="column-4 column-md-2">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <button title="Count up" @click="store.count++">Count Up</button>
      <p class="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eius, excepturi nobis
        animi aut dolores esse reprehenderit molestiae quis? Fuga illo commodi doloremque odio
        aspernatur, eos sit tempora expedita autem.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In impedit illo non commodi
        molestiae similique itaque deleniti perferendis, dolores asperiores magnam? Adipisci alias
        exercitationem facilis magni blanditiis deleniti incidunt laboriosam?
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
</template>
