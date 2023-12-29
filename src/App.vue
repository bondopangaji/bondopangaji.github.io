<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink><span class="sep"> / </span>
        <RouterLink to="/portfolio">Portfolio</RouterLink><span class="sep"> / </span>
        <RouterLink to="/now">Here & Now</RouterLink><span class="sep"> / </span>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <div class="section-wrapper">
        <section class="section-float section-side">
          <!-- leave empty for now -->
        </section>
        <section class="section-float section-middle">
          <RouterView />
        </section>
        <section class="section-float section-side">
          <!-- leave empty for now -->
        </section>
      </div>
    </main>

    <footer>Made with 🍌 by Bondo</footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  /* border: solid 1px palegoldenrod; */
}

nav {
  text-align: center;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  color: var(--color-text);
}

nav a {
  text-decoration: none;
  color: var(--color-text);
}

/* Float the section to left */
.section-float {
  float: left;
  padding: 10px;
}

/* Left and right section */
.section-float.section-side {
  width: 27.5%;
  /* border: solid 1px red; */
}

/* Middle section */
.section-float.section-middle {
  width: 45%;
}

/* Clear floats after the sections */
.section-wrapper::after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive layout - makes the three sections stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .section-float .section-side,
  .section-float .section-middle {
    width: 100%;
  }
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
}

.main-content {
  flex: 1; /* Allow the main content to grow and fill remaining space */
}

footer {
  text-align: center;
  margin-top: auto; /* Push the footer to the bottom */
}

.sep {
  opacity: 0.5;
}
</style>
