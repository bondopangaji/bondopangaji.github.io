<script setup>
  import { now } from '../data/now.js';
  import { ref } from 'vue'; 

  const nows = ref(now);
</script>

<template>
  <h3 class="title">What im up to lately</h3>
  <ul>
    <div v-for="now in nows">
      <li>{{ now.hnn }}</li>
    </div>
  </ul>
</template>

<style scoped>
  .title {
    font-size: large;
    font-weight: 600;
  }
</style>
