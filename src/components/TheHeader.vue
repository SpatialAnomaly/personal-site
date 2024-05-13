<script setup lang="ts">
defineProps<{
  altTxt: string
  wordMarkHeading: string
  wordMarkSubheading: string
}>()
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
        <div class="wordmark-heading">{{ wordMarkSubheading }}</div>
      </div>
    </div>
    <div class="socials">
      <a href=""><i class="icon-github"></i></a>
      <a href=""><i class="icon-linkedin"></i></a>
    </div>
  </header>
</template>
