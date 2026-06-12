import { profile } from '../data/profile'

export function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">02 — Experiência</span>
          <h2 className="section__title">Trajetória Profissional</h2>
        </div>

        <div className="timeline">
          {profile.experiences.map((exp, index) => (
            <article key={exp.company} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__dot" />
                {index < profile.experiences.length - 1 && <span className="timeline__line" />}
              </div>

              <div className="timeline__content">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__company">{exp.company}</h3>
                    <p className="timeline__role">{exp.role}</p>
                  </div>
                  <time className="timeline__period">{exp.period}</time>
                </div>

                <ul className="timeline__list">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
