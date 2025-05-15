import React from 'react';

export default function About() {
    return (
        <div className="about container py-5">
            <h1 className="mb-4 fw-bold">Chi siamo</h1>

            <p className="lead mb-4">
                <strong>MyHiddenDrawer</strong> nasce da un'idea semplice: perché nascondere i tuoi piaceri in fondo al cassetto quando puoi viverli con orgoglio, discrezione e un pizzico di ironia?
            </p>

            <p className="mb-3">
                Siamo un team giovane, creativo e un po’ impertinente, con l'obiettivo di rendere la sessualità un tema normale, sano e felice.
                Nel nostro cassetto trovi sex toys, anticoncezionali e sorprese piccanti... ma anche tanta cura per il tuo benessere e la tua privacy.
            </p>

            <p className="mb-5">
                Crediamo che l'intimità sia un diritto, non un lusso. E che si possa parlare di sesso con rispetto, sorriso e consapevolezza.
                Per questo ogni prodotto è selezionato con amore e descritto in modo chiaro e divertente.
            </p>

            <h2 className="mt-4 mb-3">🎯 La nostra missione</h2>
            <p className="mb-4">
                Abbattere tabù, educare al piacere, e aiutarti a dire: "Sì, me lo merito!"
                Vogliamo trasformare il classico acquisto imbarazzato in un'esperienza libera, sicura e leggera.
            </p>

            <h2 className="mt-5 mb-3">❤️ I nostri valori</h2>
            <ul className="list-group mb-5">
                <li className="list-group-item">💌 <strong>Discrezione totale:</strong> pacchi anonimi, piaceri molto espliciti.</li>
                <li className="list-group-item">🌈 <strong>Inclusività:</strong> per ogni corpo, orientamento e identità.</li>
                <li className="list-group-item">🔍 <strong>Qualità certificata:</strong> solo materiali sicuri, selezionati con cura.</li>
                <li className="list-group-item">🎓 <strong>Educazione:</strong> perché il sapere… accende il piacere.</li>
            </ul>

            <p className="fst-italic text-muted">
                PS: Il tuo piacere merita attenzione. Se sei arrivatə fin qui, sappi che sei ufficialmente parte della rivoluzione del piacere consapevole.
                E no, non giudichiamo i carrelli pieni 😉
            </p>

            <div className="mt-5 text-center">
                <a href="/" className="btn btn-base btn-secondary-mhd px-4 py-2">
                    Scopri cosa c'è nel cassetto 🔥
                </a>
            </div>
        </div>
    );
}
