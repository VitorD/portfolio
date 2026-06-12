import { profile } from '../data/profile'

export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">01 — Sobre</span>
          <h2 className="section__title">Resumo Profissional</h2>
        </div>

        <div className="about__content">
          <p className="about__text">{profile.summary}</p>

          <div className="about__highlights">
            <div className="about__card">
              <span className="about__card-icon" aria-hidden="true">⚡</span>
              <h3>Backend & .NET</h3>
              <p>Sistemas críticos, ERP, integrações e alta performance</p>
            </div>
            <div className="about__card">
              <span className="about__card-icon" aria-hidden="true">🏗️</span>
              <h3>Liderança Técnica</h3>
              <p>Arquitetura, mentoria e direcionamento de equipes</p>
            </div>
            <div className="about__card">
              <span className="about__card-icon" aria-hidden="true">🔗</span>
              <h3>Integrações</h3>
              <p>Marketplaces, NFS-e, APIs REST/SOAP e legados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
