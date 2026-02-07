import { projects } from "./data/projects.js";

const projectDetail = document.getElementById("projectDetail");
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects.find((item) => item.id === projectId);

const linkTemplate = (label, href) => {
  if (!href) return "";
  return `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
};

const renderNotFound = () => {
  projectDetail.innerHTML = `
    <section class="not-found-card">
      <p class="eyebrow">Project</p>
      <h1>Project not found</h1>
      <p>This project does not exist or the link is invalid.</p>
      <a class="link-pill" href="index.html">Back to Portfolio</a>
    </section>
  `;
};

const renderProject = (item) => {
  document.title = `${item.title} | Jainil Kotak Portfolio`;

  projectDetail.innerHTML = `
    <section class="project-hero reveal is-visible">
      <img class="project-thumbnail-large" src="${item.thumbnail}" alt="${item.title} thumbnail" />
      <div class="project-title-block">
        <p class="project-category">${item.category}</p>
        <h1>${item.title}</h1>
        <p>${item.summary}</p>
        <div class="project-links">
          ${linkTemplate("Repository", item.links.repo)}
          ${linkTemplate("Demo", item.links.demo)}
        </div>
      </div>
    </section>

    <section class="project-content-grid reveal is-visible">
      <article class="detail-card">
        <h2>Stack</h2>
        <div class="stack-list">
          ${item.stack.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </article>
      <article class="detail-card highlights-card">
        <h2>Highlights</h2>
        <ul class="highlight-list">
          ${item.highlights.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </article>
    </section>
  `;
};

if (!project) {
  renderNotFound();
} else {
  renderProject(project);
}
