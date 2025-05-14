import Searchbar from "./Searchbar"

export default function OverlaySearch({ isChecked, handleCheck }) {
  return (
    <div className="search_actions d-lg-none ">

      <Searchbar />


      <div className="my-4">
        <label htmlFor="category" className="form-label text-black fw-bold">Categoria</label>
        <select
          className="form-select form-select-sm"
          name="category"
          id="category"
          onChange={e => setCategoryQuery(e.target.value)}
        >
          <option selected value=''>Tutti i prodotti</option>
          <option value="condom" >Condom</option>
          <option value="sex-toys">SexToys</option>
        </select>
      </div>

      <div className="my-4">
        <label htmlFor="sort" className="form-label text-black fw-bold">Ordina per</label>
        <select
          className="form-select form-select-sm"
          name="sort"
          id="sort"
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="">Nessun ordinamento</option>
          <option value="price_asc">Prezzo crescente</option>
          <option value="price_desc">Prezzo decrescente</option>
          <option value="latest">Ultimi arrivi</option>
        </select>
      </div>

      <div className="form-check">
        <label htmlFor="promo" className='form-label text-black fw-bold'>In Sconto</label>
        <input
          className="form-check-input"
          name="promo"
          id="promo"
          type="checkbox"
          value={isChecked}
          aria-label="Text for screen reader"
          onChange={handleCheck}
        />
      </div>

    </div>
  )
}