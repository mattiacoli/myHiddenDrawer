export default function PrivacyPolicy() {

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">🕵️‍♀️ Privacy Policy</h1>
            <p className="lead text-center mb-5">
                La tua privacy è sacra. Proprio come il tuo cassetto segreto.
            </p>

            <div className="mb-4">
                <h4>📦 Cosa raccogliamo</h4>
                <p>
                    Quando fai acquisti su <strong>My Hidden Drawer</strong>, raccogliamo:
                </p>
                <ul>
                    <li>Nome, cognome (no, non ci interessa il soprannome 👀)</li>
                    <li>Indirizzo di spedizione (tranquill*, la scatola è discreta!)</li>
                    <li>Email e numero di telefono (per dirti "il pacco sta arrivando!")</li>
                    <li>Preferenze d'acquisto e dati anonimi di navigazione</li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>🔐 Come usiamo i tuoi dati</h4>
                <p>Solo per rendere la tua esperienza più sicura:</p>
                <ul>
                    <li>Spedizione rapida e riservata</li>
                    <li>Email con conferme, aggiornamenti e offerte (se ci dai il permesso!)</li>
                    <li>Analisi dei dati per migliorare il nostro sito</li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>🤝 Con chi li condividiamo?</h4>
                <p>
                    Con nessuno a cui non affideremmo anche il nostro stesso cassetto nascosto:
                </p>
                <ul>
                    <li>Corrieri per la consegna</li>
                    <li>Provider di pagamento (Stripe, PayPal, ecc.)</li>
                    <li>Servizi esterni che ci aiutano a migliorare</li>
                </ul>
                <p>Mai, mai, mai con terze parti invadenti o curiosoni.</p>
            </div>

            <div className="mb-4">
                <h4>💾 Per quanto li conserviamo</h4>
                <p>
                    Il minimo indispensabile. Conserviamo i tuoi dati solo finché sono necessari per offrirti un servizio ottimo (o finché ce lo chiedono le leggi noiose).
                </p>
            </div>

            <div className="mb-4">
                <h4>📖 I tuoi diritti</h4>
                <p>
                    Puoi chiederci in qualsiasi momento di:
                </p>
                <ul>
                    <li>Accedere ai tuoi dati</li>
                    <li>Correggerli</li>
                    <li>Chiederci di cancellarli (tranne quando serve tenerli per legge)</li>
                </ul>
                <p>
                    Basta scriverci a <a href="mailto:privacy@myhiddendrawer.it">privacy@myhiddendrawer.it</a> e risolviamo tutto, senza stress.
                </p>
            </div>

            <div className="mb-5">
                <h4>📍 Dove li teniamo</h4>
                <p>
                    I tuoi dati sono custoditi su server sicuri, in UE o comunque in conformità al GDPR.
                </p>
            </div>

            <div className="text-center">
                <p className="fw-bold">
                    Ultimo aggiornamento: 15 maggio 2025
                </p>
            </div>
        </div>
    )
}