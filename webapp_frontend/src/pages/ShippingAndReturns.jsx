import React from "react";

export default function ShippingAndReturns() {
    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">Spedizioni & Resi</h1>

            {/* SPEDIZIONI */}
            <div className="mb-5">
                <h3>📦 Come funziona la spedizione?</h3>
                <p>
                    Tutti gli ordini vengono spediti in confezioni super discrete. Niente loghi, niente sorprese sul pacco... al massimo dentro! 😏
                </p>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">🚀 Spedizione standard: 2-4 giorni lavorativi</li>
                    <li className="list-group-item">🎁 Gratuita per ordini sopra i 50€</li>
                    <li className="list-group-item">💸 4.99€ per ordini inferiori</li>
                </ul>
                <p>
                    Riceverai un'email con il tracking non appena il pacco partirà. Così puoi stalkerarlo senza sensi di colpa.
                </p>
            </div>

            {/* RESI */}
            <div className="mb-5">
                <h3>🔁 Posso restituire un prodotto?</h3>
                <p>
                    Certo, ma solo se non è stato aperto o usato. Per motivi di igiene, non accettiamo resi di prodotti aperti.
                </p>
                <p>
                    In caso di problemi (prodotto danneggiato, errato o malfunzionante), contattaci entro 14 giorni dalla consegna. Troveremo una soluzione insieme.
                </p>
            </div>

            {/* COME AVVIARE UN RESO */}
            <div className="mb-5">
                <h3>📬 Come avviare un reso?</h3>
                <ol className="list-group list-group-numbered mb-3">
                    <li className="list-group-item">
                        Scrivici a <a href="mailto:info@myhiddendrawer.it">info@myhiddendrawer.it</a> con numero ordine e motivo del reso.
                    </li>
                    <li className="list-group-item">Attendi la nostra conferma e le istruzioni.</li>
                    <li className="list-group-item">Spedisci il prodotto in confezione originale, non usato e non aperto.</li>
                </ol>
                <p>
                    Il rimborso verrà effettuato entro 7 giorni dal ricevimento del pacco reso. No, non ti chiediamo perché hai cambiato idea (ma siamo curiosi).
                </p>
            </div>

            {/* INFO EXTRA */}
            <div className="mb-5">
                <h3>ℹ️ Info Extra</h3>
                <p>
                    Se hai bisogno di supporto o hai dubbi esistenziali su consegne e restituzioni, scrivici. Il nostro team è pronto ad aiutarti senza giudicarti, promesso ❤️
                </p>
            </div>
        </div>
    );
}
