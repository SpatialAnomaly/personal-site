<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface ImageSrcset {
  small: string
  medium: string
  large: string
}

interface Card {
  title: string
  description: string
  color: string
  image: {
    src: string
    alt: string
    srcset: ImageSrcset
  }
  link: string
}

const props = defineProps<{
  card: Card
}>()
</script>

<template>
  <Transition name="slide">
    <div v-if="card.title != ''" class="column-3 column-md-2 card-wrap">
      <div :class="'card' + ' ' + card.color">
        <div class="card-thumb">
          <picture>
            <!-- Large devices (≥992px) -->
            <source :srcset="card.image.srcset.large" media="(min-width: 992px)" />
            <!-- Medium devices (≥577px and <992px) -->
            <source :srcset="card.image.srcset.medium" media="(min-width: 577px)" />
            <!-- Small devices (<577px) -->
            <source :srcset="card.image.srcset.small" media="(max-width: 576px)" />
            <!-- Default image if none of the above media queries match -->
            <img :src="card.image.src" :alt="card.image.alt" />
          </picture>
          <a :href="card.link" class="card-thumb-link" :title="card.title"></a>
        </div>
        <div class="card-content">
          <div class="card-title">
            <h3>{{ card.title }}</h3>
          </div>
          <div class="card-desc">
            <p>
              {{ card.description }}
            </p>
          </div>
          <div class="card-action">
            <BaseButton title="Learn More" :path="card.link" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use '@/assets/_variables.scss' as vars;

.card-wrap {
  .card {
    position: relative;
    transition: all 0.32s ease-in-out;
    transform: scale(1, 1);
    transform-origin: 50% 50%;
    &:hover {
      transform: scale(1.06, 1.06);
      z-index: 1;
    }
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
        background-color: vars.$yellow;
      }
    }

    &.card-red {
      .card-thumb:before {
        background-color: vars.$red;
      }
    }

    .card-content {
      background-color: vars.$blue-darker;
      padding: vars.$gapM;
      border-radius: 32px;
      position: relative;
    }
  }
}

.style-brute {
  .card-wrap {
    .card {
      position: relative;
      transition: none;
      transform: scale(1, 1);
      &:hover {
        transform: scale(1, 1);
      }
      &.card-yellow {
        border-left: 8px solid vars.$yellow;
      }
      &.card-red {
        border-left: 8px solid vars.$red;
      }
      .card-thumb {
        picture {
          border-radius: 0px;
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
          display: none;
        }
      }

      .card-content {
        background-color: vars.$white;
        padding: vars.$gapM;
        border-radius: 0px;
        color: vars.$gray-darker;
      }
    }
  }
}

.style-skue {
  .card-wrap {
    .card {
      transition: all 0.16s ease-in-out;
      transform: scale(1, 1);
      transform-origin: 50% 50%;
      background-color: vars.$white;
      box-shadow: 0 2px 8px -6px rgba(0, 0, 0, 0.4);
      &:hover {
        transform: scale(1, 1);
        z-index: 1;
      }
      .card-thumb {
        padding: vars.$gapS;
        picture {
          border-radius: 4px;
          margin-bottom: 0px;
        }
        &:before {
          display: none;
        }
      }

      &.card-red {
        border-top: 4px solid vars.$red;
      }

      &.card-yellow {
        border-top: 4px solid vars.$yellow;
      }

      .card-content {
        background-color: vars.$white;
        padding: 0 vars.$gapS vars.$gapS vars.$gapS;
        border-radius: 0px;
      }
    }
  }
}
</style>
