<script setup>
  import { education } from '../data/education.js';
  import { ref } from 'vue'; 

  const educations = ref(education);
</script>

<template>
  <h3 class="edu-title">Education</h3>

  <div v-for="education in educations" class="edu-wrapper">
    <div class="edu-name">{{ education.name }}</div>
    <div>{{ education.degree }}</div>
    <div class="edu-duration">{{ education.startDate }} - {{ education.endDate }}</div>
  </div>
  
</template>

<style scoped>
  .edu-title {
  font-size: large;
  font-weight: 600;
  }

  .edu-wrapper {
    padding-bottom: 16px;
  }

  .edu-name {
    font-size: medium;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-text);
  }

  .edu-duration {
    opacity: 0.8;
  }
</style>
