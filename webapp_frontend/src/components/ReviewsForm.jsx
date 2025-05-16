export default function ReviewsForm({ setIsOpen }) {
  return (
    <div className="review-form-container mb-4 p-4 border rounded">
      <h4 className="mb-3">Scrivi una recensione</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="reviewerName" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="reviewerName"
            placeholder="Inserisci il tuo nome"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reviewTitle" className="form-label">Titolo</label>
          <input
            type="text"
            className="form-control"
            id="reviewTitle"
            placeholder="Inserisci un titolo per la tua recensione"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reviewText" className="form-label">Recensione</label>
          <textarea
            className="form-control"
            id="reviewText"
            rows="3"
            placeholder="Condividi la tua esperienza con questo prodotto"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Voto</label>
          <div className="rating-input d-flex align-items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="rating"
                  id={`rating${star}`}
                  value={star}
                  required
                />
                <label className="form-check-label" htmlFor={`rating${star}`}>
                  {star} <i className="bi bi-star-fill text-warning"></i>
                </label>
              </div>
            ))}
          </div>
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
  )
}