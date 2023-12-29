// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const indexData = {
  whoami: {
    title: "Bondo Pangaji",
    subtitles: [
      "I'm currently an undergraduate student, majoring in Information and Communication Technology with a concentration in Software Engineering.",
      "I thoroughly enjoy writing well-documented code and implementing best practices in application development.",
      "My areas of interest are backend development, microservices, and cloud computing.",
    ],
    resume: true,
    resume_link: "/assets/resume/bondopangaji-resume.pdf",
  },
  kits: {
    title: "Kits",
    subtitle:
      "Here are the development languages, frameworks, and tools I usually use.",
    backend: true,
    backend_html: `
      <div class="carousel-item bg-base-100 w-full h-full">
        <div class="mockup-code w-full h-full">
            <pre data-prefix="1"><code>curl -v</code></pre>
            <pre data-prefix="  "><code>/bondopangaji/kits/backend</code></pre>
            <pre class="text-info" data-prefix=">">Trying::1...</pre>
            <pre class="text-success" data-prefix="<">HTTP/1.1 200</pre>
            <pre>{</pre>
            <pre>   "backend_list": [</pre>
            <pre>       "Java",</pre>
            <pre>       "Spring Boot",</pre>
            <pre>       "Spring Cloud",</pre>
            <pre>       "Maven",</pre>
            <pre>       "JUnit & Mockito"</pre>
            <pre>   ]</pre>
            <pre>}</pre>
            <pre></pre>
            <pre class="animate-pulse text-warning" data-prefix="?">scroll down for more</pre>
        </div>
      </div>
      `,
    frontend: true,
    frontend_html: `
      <div class="carousel-item bg-base-100 w-full h-full">
        <div class="mockup-code w-full h-full">
            <pre data-prefix="1"><code>curl -v</code></pre>
            <pre data-prefix="  "><code>/bondopangaji/kits/frontend</code></pre>
            <pre class="text-info" data-prefix=">">Trying::1...</pre>
            <pre class="text-success" data-prefix="<">HTTP/1.1 200</pre>
            <pre>{</pre>
            <pre>   "frontend_list": [</pre>
            <pre>       "HTML",</pre>
            <pre>       "CSS",</pre>
            <pre>       "Bootstrap",</pre>
            <pre>       "Tailwind"</pre>
            <pre>   ]</pre>
            <pre>}</pre>
            <pre></pre>
            <pre></pre>
            <pre class="animate-pulse text-warning" data-prefix="?">scroll up/down for more</pre>
        </div>
      </div>
      `,
    database: true,
    database_html: `
      <div class="carousel-item bg-base-100 w-full h-full">
        <div class="mockup-code w-full h-full">
          <pre data-prefix="1"><code>curl -v</code></pre>
          <pre data-prefix="  "><code>/bondopangaji/kits/database</code></pre>
          <pre class="text-info" data-prefix=">">Trying::1...</pre>
          <pre class="text-success" data-prefix="<">HTTP/1.1 200</pre>
          <pre>{</pre>
          <pre>   "database_list": [</pre>
          <pre>       "Postgres",</pre>
          <pre>       "MySQL",</pre>
          <pre>       "MongoDB"</pre>
          <pre>   ]</pre>
          <pre>}</pre>
          <pre></pre>
          <pre></pre>
          <pre></pre>
          <pre class="animate-pulse text-warning" data-prefix="?">scroll up/down for more</pre>
        </div>
      </div>
      `,
    ops: true,
    ops_html: `
      <div class="carousel-item bg-base-100 w-full h-full">
        <div class="mockup-code w-full h-full">
          <pre data-prefix="1"><code>curl -v</code></pre>
          <pre data-prefix="  "><code>/bondopangaji/kits/ops</code></pre>
          <pre class="text-info" data-prefix=">">Trying::1...</pre>
          <pre class="text-success" data-prefix="<">HTTP/1.1 200</pre>
          <pre>{</pre>
          <pre>   "ops_list": [</pre>
          <pre>       "Github Actions",</pre>
          <pre>       "Jenkins",</pre>
          <pre>       "Docker",</pre>
          <pre>   ]</pre>
          <pre>}</pre>
          <pre></pre>
          <pre></pre>
          <pre class="animate-pulse text-warning" data-prefix="?">scroll up for more</pre>
        </div>
      </div>
      `,
  },
  repositories: {
    title: "Repositories",
    subtitle: "Here are some of my projects that I've created while studying.",
    project_list: [
      {
        title: "BMWoods Microservice",
        description:
          "A Microservice Project, intended as a study case in Microservice Architecture and Hexagonal Architecture ",
        github: true,
        github_link: "https://github.com/bondopangaji/bmwoods-microservice",
        preview: false,
        preview_link: null,
      },
      {
        title: "Groomycat",
        description:
          " Groomycat is a landing page designed for pet care organizations. It is implemented with HTML, CSS, Bootstrap 5, and AlpineJS.",
        github: true,
        github_link: "https://github.com/bondopangaji/groomycat",
        preview: false,
        preview_link: null,
      },
      {
        title: "Spring Security JWT",
        description:
          "Implementation of authentication and access control for Spring REST API using JSON Web Tokens.",
        github: true,
        github_link: "https://github.com/bondopangaji/spring-security-jwt",
        preview: false,
        preview_link: null,
      },
      {
        title: "Boot Web App CI/CD",
        description:
          "A Spring Boot project as a study case in CI/CD with Git, Github Repository, Github Actions, and Docker.",
        github: true,
        github_link: "https://github.com/bondopangaji/boot-web-app-ci-cd",
        preview: false,
        preview_link: null,
      },
      {
        title: "Bon EMS",
        description:
          "EMS Web Appp implemented with Spring Boot to automating manual tasks such as managing employee data and payroll.",
        github: true,
        github_link: "https://github.com/bondopangaji/bon-ems",
        preview: false,
        preview_link: null,
      },
      {
        title: "Portfolio Website",
        description:
          "It's basically this portfolio website, I built with HTML, Bulma CSS, Vanilla Javascript and templating with AlpineJS.",
        github: false,
        github_link: null,
        preview: true,
        preview_link: "https://bondopangaji.me",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle:
      "If you want to collaborate, discuss something, or maybe just want to connect, let me know by using one of the social links down below. My inbox is always open.",
    socials: [
      {
        name: "E-Mail",
        link: "mailto:bondopangaji@gmail.com",
        icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512" fill="currentColor">
            <path 
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/>
          </svg>
          `,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bondopangaji",
        icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
            <path 
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          </svg>
          `,
      },
      {
        name: "GitHub",
        link: "https://www.github.com/bondopangaji",
        icon_svg: `
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 496 512" fill="currentColor">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
          `,
      },
    ],
  },
};

function loadData() {
  return indexData;
}

loadData()

// /**
// * On load handler,
// * Equivalent to JQuery `$( document ).ready()`.
// */
// if (
//   document.readyState === "complete" ||
//   (document.readyState !== "loading" && !document.documentElement.doScroll)
// ) {
//   loadData();
// }
