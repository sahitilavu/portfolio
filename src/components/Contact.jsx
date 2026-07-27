import { profile } from "../data";

function Contact() {
  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">04 · CONTACT</p>
          <h2 className="section-title">Let's Work Together</h2>
        </div>
        <p className="contact-text">
          Open to AI engineering roles, collaborations, and interesting problems in
          generative AI, agentic systems, and applied ML. Reach out any time.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a
            className="btn btn-secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
