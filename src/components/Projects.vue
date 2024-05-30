<script setup>
import Badge from '../components/reusable/Badge.vue';
import { portfolio } from '../data/portfolio.js';
import { ref, computed } from 'vue';

const projects = ref(portfolio);

const currentPage = ref(1);
const itemsPerPage = 6;

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return projects.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage));

const goToPage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <h3 class="projects-title">Recent Projects</h3>
  <ul>
    <div v-for="project in paginatedProjects" :key="project.id">
      <div class="projects-container">
        <li><span class="bold">{{ project.title }}</span>
          <span v-if="project.links?.github">
            [<a :href="project.links.github" target="_blank">Source</a>]
          </span>
          <span v-if="project.links?.visit">
            [<a :href="project.links.visit" target="_blank">Visit</a>]
          </span>
        </li>
        <p>{{ project.description }}</p>
        <p style="margin-top: 6px;">{{ project.whatido }}</p>
        <Badge v-for="(builtWith, index) in project.builtWith" :key="index" class="badge-margin">{{ builtWith }}
        </Badge>
      </div>
    </div>
  </ul>
  <div class="pagination">
    <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :disabled="page === currentPage"
      style="margin-right: 3px;">{{ page }}</button>
  </div>
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

p {
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}

.bold {
  font-weight: 600;
}

a {
  color: var(--color-text);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
