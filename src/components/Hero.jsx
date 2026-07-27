import { profile, experience, certifications } from "../data";

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow">Hi, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Quick facts">
          <p className="hero-card-title">AT A GLANCE</p>
          <div className="hero-stat">
            <span className="hero-stat-label">Experience</span>
            <span className="hero-stat-value">4+ years</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Current role</span>
            <span className="hero-stat-value">
              {experience[0].role} @ {experience[0].company}
            </span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Certifications</span>
            <span className="hero-stat-value">{certifications.length}</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-label">Based in</span>
            <span className="hero-stat-value">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
