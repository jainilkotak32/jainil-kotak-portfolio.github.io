const projectTemplate = (project) => `
  <article class="project-card reveal">
    <a class="project-card-link" href="project.html?id=${encodeURIComponent(project.id)}" aria-label="Open ${project.title}">
      <img class="project-thumb" src="${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy" />
      <div class="project-meta">
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
      </div>
    </a>
  </article>
`;

export const renderProjects = (items, projectGrid) => {
  if (!items.length) {
    projectGrid.innerHTML = `<p class="empty-state">No projects matched this filter.</p>`;
    return;
  }

  projectGrid.innerHTML = items.map(projectTemplate).join("");
};

export const renderFilters = (categories, activeCategory, filterRow, onFilterChange) => {
  filterRow.innerHTML = categories
    .map(
      (category) => `
      <button
        class="filter-btn ${category === activeCategory ? "active" : ""}"
        data-category="${category}"
        type="button"
      >
        ${category}
      </button>
    `
    )
    .join("");

  [...filterRow.querySelectorAll(".filter-btn")].forEach((btn) => {
    btn.addEventListener("click", () => onFilterChange(btn.dataset.category));
  });
};

export const renderStats = (items, statsElement) => {
  const byCategory = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  statsElement.innerHTML = `
    <span><strong>${items.length}</strong> projects</span>
    <span><strong>${Object.keys(byCategory).length}</strong> sections</span>
  `;
};
