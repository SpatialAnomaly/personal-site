<script setup lang="ts">
defineProps<{}>()
</script>

<template>
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
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet
          feugiat lectus.
        </p>
      </div>
      <div class="card-action">
        <BaseButton title="Learn More" path="#" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;
</style>
