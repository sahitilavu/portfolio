import { projects, publications } from "../data";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-label">02 · PROJECTS</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-list">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {publications.length > 0 && (
          <div className="publications">
            <p className="publications-label">RESEARCH PUBLICATIONS</p>
            {publications.map((pub) => (
              <p className="publication-item" key={pub.title}>
                "{pub.title}" — <span className="publication-venue">{pub.venue}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
