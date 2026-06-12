import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {profile.shortName}. Todos os direitos reservados.
        </p>
        <p className="footer__location">{profile.location}</p>
      </div>
    </footer>
  )
}
