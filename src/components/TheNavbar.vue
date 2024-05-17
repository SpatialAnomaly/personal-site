<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  navButtons: Array<{ title: string; icon: string; path: string; id: string }>
}>()
</script>

<template>
  <div class="wrap">
    <nav class="in-page-navbar">
      <div class="aesthetic-picker-wrap"></div>
      <ul class="in-page-navbar-items">
        <li v-for="navItem in navButtons" :key="navItem.id">
          <a :href="navItem.path" :id="navItem.id" class="nav-button">
            <span>{{ navItem.title }}</span>
            <i :class="navItem.icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
