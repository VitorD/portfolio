import { profile } from '../data/profile'

export function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">03 — Habilidades</span>
          <h2 className="section__title">Stack & Competências</h2>
        </div>

        <div className="skills__grid">
          {profile.skills.map((skill) => (
            <span key={skill} className="skills__tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
