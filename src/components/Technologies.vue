<template>
  <h3 class="tech-title">Technologies</h3>

  <div class="tech-container">
    <div class="tech-description">Technologies that i familiar with: </div>
    <ul>
      <li><span class="bold">Languages:</span> Go, Kotlin, Groovy, Java, HTML, CSS, Javascript</li>
      <li><span class="bold">Backend:</span> Spring, Echo, Nuxt</li>
      <li><span class="bold">Databases:</span> MySQL, PostgreSQL</li>
      <li><span class="bold">Frontend/Templating:</span> Vue, Thymeleaf, HTMX</li>
      <li><span class="bold">VCS:</span> Git, GitHub, GitHub Actions</li>
    </ul>
  </div>

</template>

<style scoped>
  .tech-title {
  font-size: large;
  font-weight: 600;
  }

  .tech-container {
    padding-top: 6px;
  }

  ul {
    margin: 0;
  }

  li {
    text-align: justify;
    text-justify: inter-word;
  }

  .bold {
    font-weight: 600;
    opacity: 0.9;
  }
</style>
