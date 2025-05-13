import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
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

          {/* Newsletter */}
          <div className="col-md-3">
            <h5>Non perderti le novità</h5>
            <p className="small">
              Iscriviti alla nostra newsletter per ricevere offerte esclusive e contenuti segreti. Niente spam, solo goduria.
            </p>
            <form className="d-flex flex-column gap-2">
              <input type="email" className="form-control" placeholder="La tua email" />
              <button type="submit" className="btn btn-outline-dark">Iscriviti</button>
            </form>
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
