<script setup>
  import Badge from '../components/reusable/Badge.vue';
  import { portfolio } from '../data/portfolio.js';
  import { ref } from 'vue'; 

  const projects = ref(portfolio);
</script>

<template>
  <h3 class="projects-title">Recent Projects</h3>
  <ul>
    <div v-for="project in projects" :key="project.id">
      <div class="projects-container">
      <li><span class="bold">{{ project.title }}</span>
        <span v-if="project.links.github">
          [<a v-bind:href="project.links.github" target="_blank">Source</a>] 
        </span>
        <span v-if="project.links.visit">
          [<a v-bind:href="project.links.visit" target="_blank">Visit</a>] 
        </span>
      </li>
      <p>{{ project.description }}</p>
      <Badge v-for="(builtWith, index) in project.builtWith" :key="index" class="badge-margin" >{{ builtWith }}</Badge>
    </div>
    </div>
  </ul>
</template>


<style scoped>
  .projects-title {
  font-size: large;
  font-weight: 600;
  }

  .projects-container {
    margin-bottom: 8px;
  }

  ul {
    margin: 0;
  }

  li {
    text-align: justify;
    text-justify: inter-word;
  }

  p {
    margin: 0;
  }

  .bold {
    font-weight: 600;
  }

  a {
    color: var(--color-text);
  }
</style>
