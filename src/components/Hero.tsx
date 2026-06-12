import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__intro">
          <div className="hero__avatar-wrap">
            <img
              src="/perfil.jpg"
              alt={profile.name}
              className="hero__avatar"
            />
          </div>

          <div className="hero__headline">
            <p className="hero__eyebrow">
              <span className="hero__status" />
              Disponível para novos desafios
            </p>

            <h1 className="hero__title">{profile.name}</h1>
            <p className="hero__subtitle">{profile.title}</p>
          </div>
        </div>

        <div className="hero__meta">
          <span className="hero__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </span>
          <span className="hero__meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            5+ anos de experiência
          </span>
        </div>

        <div className="hero__actions">
          <a href="#experiencia" className="btn btn--primary">
            Ver experiência
          </a>
          <a href="#contato" className="btn btn--ghost">
            Entrar em contato
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>200+</strong>
            <span>Clientes impactados</span>
          </div>
          <div className="hero__stat">
            <strong>40%</strong>
            <span>Redução em chamados</span>
          </div>
          <div className="hero__stat">
            <strong>98%</strong>
            <span>Cobertura de testes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
