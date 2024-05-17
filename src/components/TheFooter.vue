<script setup lang="ts">
defineProps<{
  notice: string
}>()
</script>

<template>
  <footer>
    <div class="notice">
      {{ notice }}
    </div>
    <div class="watermark"></div>
  </footer>
</template>
