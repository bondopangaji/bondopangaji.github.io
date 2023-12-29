<template>
  <h3 class="we-title">Work Experience</h3>
  <div class="we-header">
    <a href="https://www.savantdegrees.com/" target="_blank" class="we-company">Savant Degrees</a> <span class="we-duration">August 2022 - August 2023</span>
  </div>
  <div class="we-role">Junior Software Engineer</div>
  <div class="we-description">Savant Degrees is a Digital Innovation Studio that helps businesses unleash their exponential growth through digital transformation.</div>
  
  <div class="we-responsibilites-container">
    <div class="we-responsibilities">Responsibilities: </div>
    <ul>
      <li>Maintaining Telin Enterprise and Telin Ticketing Web Application.</li>
      <li>Collaborate with project managers and fellow developers throughout the RFC implementation to ensure the successful completion of the project.</li>
      <li>Identified and resolved software bugs, enhancing overall code quality and system reliability.</li>
      <li>Collaborate with project managers to effectively capture and articulate workflows in the business process documentation.</li>
      <li>Participate code review with senior software engineer. Gained valuable feedback to improve my coding practices and skills. </li>
      <li>Continuously learning and enhancing proficiency in programming abilities</li>
    </ul>
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

  li {
    text-align: justify;
    text-justify: inter-word;
  }
</style>
