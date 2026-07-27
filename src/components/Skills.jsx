import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-label">01 · SKILLS</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3 className="skill-card-title">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
