import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/Card/ProductCard'
import Searchbar from '../components/Searchbar'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categoryQuery, setCategoryQuery] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [isChecked, setIsChecked] = useState(false)


  const query = searchParams.get('q')

  // sort function
  /**
   * Sorts an array of products based on the specified sort type.
   *
   * @param {Array<Object>} products - The array of product objects to be sorted.
   * @param {string} sortType - The type of sorting to apply.
   *   Possible values:
   *   - 'price_asc': Sorts products by price in ascending order.
   *   - 'price_desc': Sorts products by price in descending order.
   *   - 'latest': Sorts products by creation date in descending order (newest first).
   *   If no sortType is provided, the original array is returned unsorted.
   * @returns {Array<Object>} - A new array of products sorted based on the specified sort type.
   */
  function sortProducts(products, sortType) {
    if (!sortType) return products

    const sortedProducts = [...products]
    switch (sortType) {
      case 'price_asc':
        return sortedProducts.sort((a, b) => parseFloat(a.final_price) - parseFloat(b.final_price))
      case 'price_desc':
        return sortedProducts.sort((a, b) => parseFloat(b.final_price) - parseFloat(a.final_price))
      case 'latest':
        return sortedProducts.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      default:
        return products
    }
  }

  function handleCheck() {
    setIsChecked(!isChecked)
  }



  useEffect(() => {
    if (query && categoryQuery) {
      fetch(`http://localhost:3000/api/v1/products/search?name=${query}&category=${categoryQuery}`)
        .then(res => res.json())
        .then(data => {
          let filteredData = isChecked ? (data.filter(product => product.promotion === 1)) : (data)
          setFilteredProducts(sortProducts(filteredData, sortBy))
        })
        .catch(error => console.error('Error:', error))
    } else if (query) {
      fetch(`http://localhost:3000/api/v1/products/search?name=${query}`)
        .then(res => res.json())
        .then(data => {
          let filteredData = isChecked ? (data.filter(product => product.promotion === 1)) : (data)
          setFilteredProducts(sortProducts(filteredData, sortBy))
        })
        .catch(error => console.error('Error:', error))
    }
  }, [query, categoryQuery, sortBy, isChecked])

  return (
    <>
      <div className="row  mt-4 me-auto justify-content-center ">


        <div className="col border border-3 border-white rounded-3 " >

        </div>

      </div>



      {/* products list */}
      <div div className="container-fluid mt-4 p-3" >
        <div className="row">
          <div className="col-3 d-flex flex-column d-sm-none d-md-block">

            <div className="search_actions sticky-details ">

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

          </div>
          <div className="col-9">
            {filteredProducts?.length > 0 ? (
              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4">
                {filteredProducts.map(item => (
                  <ProductCard item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <div className='text-center' style={{ minHeight: '80vh' }}>
                <h2>Nessun prodotto trovato</h2>
              </div>
            )
            }
          </div>
        </div>

      </div >
    </>
  )
}