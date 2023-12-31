<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode.value ? 'dark' : 'light'
    );
  };
</script>

<template>
  <div class="app-container">
    <header>
      <nav>
        <button class="darkModeBtn" @click="toggleDarkMode">
          <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" style="stroke: var(--color-text);" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M9.173 14.83a4 4 0 1 1 5.657-5.657"/>
                <path d="m11.294 12.707l.174.247a7.5 7.5 0 0 0 8.845 2.492A9 9 0 0 1 5.642 18.36M3 12h1m8-9v1M5.6 5.6l.7.7M3 21L21 3"/>
            </g>
        </svg>
        </button>
      </nav>
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
  display: flex;
  flex-direction: column;
}

nav {
  text-align: center;
  margin:0 27.5%;
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
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

footer {
  text-align: center;
  margin-top: auto;
  padding-top: 18px;
}

.sep {
  opacity: 0.5;
}

.darkModeBtn {
  float: right;
  margin-bottom: 10px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
}
</style>
