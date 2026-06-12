import { profile } from '../data/profile'

export function Education() {
  const { education } = profile

  return (
    <section id="formacao" className="section education">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">04 — Formação</span>
          <h2 className="section__title">Formação Acadêmica</h2>
        </div>

        <article className="education__card">
          <div className="education__icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 10v6M2 10l10-6 10 6-10 6z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <div>
            <h3 className="education__degree">{education.degree}</h3>
            <p className="education__institution">{education.institution}</p>
            <p className="education__location">{education.location}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
