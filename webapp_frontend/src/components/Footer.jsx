import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src="/logo/my_hidden_drawer_logo.png" alt="logo" className="logo mb-5" style={{ width: "300px" }} />

        </NavLink>
        <div className="row gy-4">

          {/* Chi siamo */}
          <div className="col-md-3">
            <h5>Siamo il tuo cassetto segreto</h5>
            <p className="small">
              Amiamo la discrezione e il piacere. Da noi trovi prodotti pensati per rendere ogni momento speciale... e un po' piccante.
            </p>
            <ul className="list-unstyled">
              <li><Link className="text-decoration-none " to="/about">Scopri di più</Link></li>
            </ul>
          </div>

          {/* Link utili */}
          <div className="col-md-3">
            <h5>Naviga con piacere</h5>
            <p className="small">Siamo qui per aiutarti anche nei momenti più… complicati!</p>
            <ul className="list-unstyled">
              <li><Link className="text-decoration-none " to="/faq">FAQ</Link></li>
              <li><Link className="text-decoration-none " to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-decoration-none " to="/terms">Termini e Condizioni</Link></li>
              <li><Link className="text-decoration-none " to="/shipping-returns">Spedizioni e Resi</Link></li>
              <li><Link className="text-decoration-none " to="/contact">Contattaci</Link></li>
            </ul>
          </div>

          {/* Recensioni hot */}
          <div className="col-md-3">
            <h5>Cosa dicono i nostri clienti</h5>
            <p className="small">Spoiler: qualcuno ha detto “meglio del mio ex”.</p>
            <ul className="list-unstyled">
              <li>🗯️ “Un'esperienza che supera ogni aspettativa.”</li>
              <li>🗯️ “Arrivato in confezione super discreta. Meno male.”</li>
              <li><Link className="text-decoration-none" to="/reviews">Leggi tutte le recensioni</Link></li>
            </ul>
          </div>


          {/* Social */}
          <div className="col-md-3">
            <h5>Scopri i nostri contenuti social</h5>
            <p className="small">Seguici per consigli, novità e un pizzico di pepe extra.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://instagram.com" className=" text-decoration-none">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com" className=" text-decoration-none">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" className=" text-decoration-none">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" className=" text-decoration-none">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" className=" text-decoration-none">
                  <i className="bi bi-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="text-center mt-4 small">
          © {new Date().getFullYear()} MyHiddenDrawer - Tutti i diritti riservati
        </div>
      </div>
    </footer>
  )
}
