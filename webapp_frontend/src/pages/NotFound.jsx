import { Link } from 'react-router-dom';

export default function NotFound() {

    return (

        <>

            <div className="container text-center py-5" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h2 className="display-4 mb-4">404 - Pagina non trovata</h2>
                <h3 className="mb-4">Oops... Sei finito in un punto sensibile! 🤭</h3>
                <p className="lead mb-4">
                    La pagina che cerchi non esiste... ma abbiamo tanti modi per farti sentire meglio!
                </p>
                <Link to="/" className="btn btn-404" style={{ backgroundColor: "var(--mhd-secondary)", color: "white", borderRadius: "20px", padding: "10px 20px" }}>
                    Torna alla Homepage
                </Link>
            </div>

        </>

    )

}