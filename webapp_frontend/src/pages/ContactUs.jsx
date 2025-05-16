import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="contact container my-5">
            <h1 className="mb-4 text-center">Contattaci</h1>

            <p className="lead text-center">
                Hai domande, dubbi, curiosità o vuoi solo farci un complimento? Siamo qui per te.
            </p>

            {submitted ? (
                <div className="alert alert-success mt-5 text-center" role="alert">
                    Grazie per il tuo messaggio! Ti risponderemo al più presto, promesso 💌
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mt-4 col-md-8 offset-md-2">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Chi sei? (nome, nickname o alter ego)"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Inserisci un'email valida"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Messaggio</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Raccontaci tutto, senza tabù!"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-base btn-outline-primary-mhd">Invia Messaggio</button>
                </form>
            )}

            <div className="mt-5 text-center">
                <p>
                    Preferisci la vecchia scuola? Scrivici direttamente a <a href="mailto:info@myhiddendrawer.it">info@myhiddendrawer.it</a>
                </p>
            </div>
        </div>
    );
}
