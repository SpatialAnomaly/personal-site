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
@use '@/assets/_grid.scss' as gridvars;
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

    @media screen and (max-width: gridvars.$lg-breakpoint) {
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      gap: vars.$gapM;
      padding: 0 vars.$gapM;
    }

    .notice {
      flex: 0 0 50%;
      @media screen and (max-width: gridvars.$lg-breakpoint) {
        flex: 0 0 100%;
        order: 1;
      }
    }

    .watermark {
      flex: 0 0 132px;
      margin-left: auto;
      @media screen and (max-width: gridvars.$lg-breakpoint) {
        margin-left: 0;
        flex: 0 0 100%;
        width: 60px;
        order: 0;
      }
    }
  }
}

.style-brute {
  footer {
    background-color: vars.$gray-darker;
    color: vars.$white;
  }
}

.style-skue {
  footer {
    background-color: vars.$gray-dark;
    color: vars.$white;
  }
}
</style>
