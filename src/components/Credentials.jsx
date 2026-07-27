import { certifications, education } from "../data";

function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">03 · CREDENTIALS</p>
          <h2 className="section-title">Certifications & Education</h2>
        </div>
        <div className="creds-grid">
          <div className="creds-card">
            <h3 className="creds-card-title">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li className="cert-item" key={cert}>
                  <span className="cert-badge">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="creds-card">
            <h3 className="creds-card-title">Education</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">{education.school}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
