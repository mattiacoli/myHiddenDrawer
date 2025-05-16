import { useState } from 'react'

export default function ReviewsForm({ setIsOpen, product_id }) {

  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    product_id: product_id,  // Aggiungi il product_id qui nell'inizializzazione
    author: '',
    title: '',
    vote: 1,
    text: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/reviews/add_review', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.message) {
          setSuccess(data.message)
        }
        console.log(data);
        setFormData({
          product_id: product_id,
          author: '',
          title: '',
          vote: 1,
          text: ''
        })
      })
      .catch(err => console.error(err))
  }

  return (
    <>


      <div className="container">
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

      </div>

      <div className="review-form-container mb-4 p-4 border rounded">
        <h4 className="mb-3">Scrivi una recensione</h4>
        <form action='POST' onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-11">
              <label htmlFor="reviewerName" className="form-label">Nome</label>
              <input
                type="text"
                className="form-control search_form"
                id="reviewerName"
                placeholder="Inserisci il tuo nome"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>

            <div className="col-1">
              <label htmlFor="reviewVote" className="form-label">Voto</label>
              <input
                type="number"
                className="form-control search_form"
                id="reviewVote"
                min="1"
                max="5"
                value={formData.vote}
                onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) || 0 })}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="reviewTitle" className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control search_form"
              id="reviewTitle"
              placeholder="Inserisci un titolo per la tua recensione"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reviewText" className="form-label">Recensione</label>
            <textarea
              className="form-control search_form"
              id="reviewText"
              rows="3"
              placeholder="Condividi la tua esperienza con questo prodotto"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
            ></textarea>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn-base btn-primary-mhd">
              Invia recensione
            </button>
            <button
              type="button"
              className="btn-base btn-outline-secondary-mhd"
              onClick={() => setIsOpen(false)}
            >
              Annulla
            </button>
          </div>
        </form>
      </div>
    </>
  )
}