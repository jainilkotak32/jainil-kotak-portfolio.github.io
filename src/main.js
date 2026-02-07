import { categories, projects } from "./data/projects.js";
import { renderFilters, renderProjects, renderStats } from "./components/renderProjects.js";

const state = {
  activeCategory: "All",
  searchTerm: ""
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver;

const projectGrid = document.getElementById("projectGrid");
const filterRow = document.getElementById("filterRow");
const searchInput = document.getElementById("searchInput");
const statsElement = document.getElementById("stats");

const matchesSearch = (project, term) => {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return true;

  const haystack = [project.title, project.category, project.summary, ...project.stack]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalized);
};

const getVisibleProjects = () => {
  return projects.filter((project) => {
    const categoryMatch =
      state.activeCategory === "All" || project.category === state.activeCategory;
    const searchMatch = matchesSearch(project, state.searchTerm);

    return categoryMatch && searchMatch;
  });
};

const revealElements = () => {
  const revealTargets = [...document.querySelectorAll(".reveal:not(.is-visible)")];

  if (!revealTargets.length) return;

  if (prefersReducedMotion) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );
  }

  revealTargets.forEach((element) => revealObserver.observe(element));
};

const updateView = () => {
  const visible = getVisibleProjects();
  renderFilters(categories, state.activeCategory, filterRow, (category) => {
    state.activeCategory = category;
    updateView();
  });
  renderProjects(visible, projectGrid);
  renderStats(projects, statsElement);
  revealElements();
};

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  updateView();
});

updateView();
