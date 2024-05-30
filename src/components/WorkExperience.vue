<script setup>
import { work } from '../data/work.js';
import { ref } from 'vue';

const works = ref(work);
</script>

<template>
  <h3 class="we-title">Work Experience</h3>

  <div v-for="work in works" class="we-wrapper">
    <div class="we-header">
      <a v-bind:href="work.companyLink" target="_blank" class="we-company">{{ work.companyName }}</a> <span
        class="we-duration">{{ work.startDate }} - {{ work.endDate }}</span>
    </div>
    <div class="we-role">{{ work.title }}</div>
    <div class="we-description">{{ work.companyDescription }}</div>

    <div class="we-responsibilites-container">
      <div class="we-responsibilities">Responsibilities: </div>
      <ul v-for="responsibility in work.responsibilities">
        <li>{{ responsibility }}</li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
.we-title {
  font-size: large;
  font-weight: 600;
}

.we-header {
  display: flex;
  justify-content: space-between;
}

.we-wrapper {
  padding-bottom: 16px;
}

.we-company {
  font-size: medium;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text);
}

.we-duration {
  opacity: 0.8;
}

.we-role {
  font-style: italic;
}

.we-description {
  text-align: justify;
  text-justify: inter-word;
  opacity: 0.8;
}

.we-responsibilites-container {
  padding-top: 6px;
}

ul {
  margin: 0;
}
</style>
