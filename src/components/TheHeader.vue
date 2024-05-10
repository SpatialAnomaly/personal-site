<script setup lang="ts">
defineProps<{
    altTxt: string
}>()
</script>

<template>
    <header>
      <div class="logo">
        <picture>
          <img src="" :alt="altTxt"/>
        </picture>
      </div>
      <div class="socials">
        <a href=""><i class="icon-github"></i></a>
        <a href=""><i class="icon-linkedin"></i></a>
      </div>
    </header>
</template>