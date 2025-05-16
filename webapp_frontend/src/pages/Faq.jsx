import React from 'react';

export default function FAQ() {
    return (
        <div className="faq container py-5">
            <h1 className="fw-bold mb-4">FAQ - Domande frequenti (e piccanti)</h1>

            <p className="lead mb-5">
                Hai domande? Tranquillə, non sei l'unicə! Qui trovi le risposte che molti pensano ma pochi osano chiedere. Nessun imbarazzo, solo chiarezza (e qualche risata).
            </p>

            <div className="accordion" id="faqAccordion">

                {/* 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            📦 La confezione è discreta?
                        </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Assolutamente sì. Il tuo pacco sembrerà uscito da un convento: nessun logo, nessun riferimento "hot", solo tu saprai cosa c'è dentro.
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            🚚 Quanto tempo impiega la spedizione?
                        </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Generalmente tra 24 e 72 ore. Dipende dal tuo "livello di impazienza". Riceverai una mail con il tracking per monitorare il tuo piacere in arrivo!
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            💳 Posso pagare in modo sicuro?
                        </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Sì, tutti i pagamenti sono criptati e sicuri. Accettiamo carte, PayPal e il baratto... no, scherziamo: solo metodi moderni!
                        </div>
                    </div>
                </div>

                {/* 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            🔄 Posso fare un reso?
                        </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Per motivi igienici, i prodotti sigillati non possono essere restituiti se aperti. Se invece hai ricevuto un prodotto danneggiato o sbagliato, scrivici e lo sistemiamo in un attimo!
                        </div>
                    </div>
                </div>

                {/* 5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            🤫 Vendete anche in farmacia?
                        </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            No, siamo 100% online per garantirti privacy, scelta e quella magica sensazione di fare acquisti in pigiama.
                        </div>
                    </div>
                </div>

                {/* 6 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="faq6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                            🎯 Come faccio a scegliere il sex toy o il condom giusto per me?
                        </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Ottima domanda! Ogni corpo è diverso, così come i gusti e le fantasie. Leggi bene le descrizioni prodotto, dai un'occhiata alle recensioni ironiche (ma vere), e fidati del tuo istinto. Se sei alle prime armi, inizia con qualcosa di semplice e... scopri cosa ti accende! 🔥
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-5 text-center">
                <a href="/contattaci" className="btn btn-base btn-outline-primary-mhd px-4 py-2">
                    Non hai trovato la risposta? Contattaci!
                </a>
            </div>
        </div>
    );
}
