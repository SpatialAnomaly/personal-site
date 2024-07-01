<script setup lang="ts">
import BaseLogo from './BaseLogo.vue'
defineProps<{
  notice: string
}>()
</script>

<template>
  <footer>
    <div class="footer-inner">
      <div class="notice">
        {{ notice }}
      </div>
      <div class="watermark"><BaseLogo /></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;
@use '@/assets/_mixins.scss' as mixins;

footer {
  background-color: vars.$blue-darker;
  color: vars.$white;
  padding: vars.$gapL 0;

  .footer-inner {
    @include mixins.outer-wrap;
    padding: 0 vars.$gapL;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: vars.$gapL;

    .notice {
      flex: 0 0 50%;
    }

    .watermark {
      flex: 0 0 132px;
      margin-left: auto;
    }
  }
}

.style-brute {
  footer {
    background-color: vars.$white;
    border-top: 8px solid vars.$gray-darker;
    color: vars.$gray-darker;
  }
}

.style-skue {
  footer {
    background-color: vars.$gray-dark;
    color: vars.$white;
  }
}
</style>
