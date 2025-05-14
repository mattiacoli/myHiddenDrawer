import Searchbar from "./Searchbar"
import styles from './Searchbox.module.css'

export default function FilterBox({ isChecked, handleCheck, setCategoryQuery, setSortBy }) {
  return (
    <div className="search_actions ">




      <Searchbar />


      <div className="my-4">
        <label htmlFor="category" className="form-label text-black fw-bold">Categoria</label>
        <select
          className={`form-select form-select-sm ${styles.select}`}
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
          className={`form-select form-select-sm ${styles.select}`}
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

      <div className='form-check form-switch'>
        <input
          className={`form-check-input ${styles.check}`}
          name="promo"
          id="promo"
          type="checkbox"
          value={isChecked}
          aria-label="Text for screen reader"
          onChange={handleCheck}
        />
        <label htmlFor="promo" className='form-label text-black fw-bold'>In Sconto</label>
      </div>

    </div>
  )
}