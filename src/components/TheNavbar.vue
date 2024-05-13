<script setup lang="ts">
defineProps<{}>()
</script>
<template>
  <nav class="in-page-navbar">
    <div class="aesthetic-picker-wrap"></div>
    <div class="in-page-navbar-items">
      <ul>
        <li>
          <a href="#" class="in-page-navbar-item nav-button">
            <span>Work</span>
            <span class="material-symbols-outlined"> check_indeterminate_small </span>
          </a>
        </li>
        <li>
          <a href="#" class="in-page-navbar-item nav-button"
            ><span>Bio</span> <i class="icon-bio"></i
          ></a>
        </li>
        <li>
          <a href="#" class="in-page-navbar-item nav-button"
            ><span>Contact</span> <i class="icon-contact"></i
          ></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
