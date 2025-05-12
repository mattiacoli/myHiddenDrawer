import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/Card/ProductCard'
import Searchbar from '../components/Searchbar'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category_query, set]


  const query = searchParams.get('q')

  useEffect(() => {
    if (query) {
      fetch(`http://localhost:3000/api/v1/products/search?name=${query}`)
        .then(res => res.json())
        .then(data => {
          setFilteredProducts(data)
        })
        .catch(error => console.error('Error:', error))
    }

    if (query && category_query) {
      fetch(`http://localhost:3000/api/v1/products/search?name=${query}&category=${category_query}`)
        .then(res => res.json())
        .then(data => {
          setFilteredProducts(data)
        })
        .catch(error => console.error('Error:', error))
    }


  }
  }, [query, category_query])

return (
  <>
    <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
      <div className="container-fluid py-5 text-center">
        <Searchbar />

        <div className="mb-3">
          <label htmlFor="category" className="form-label">City</label>
          <select
            className="form-select form-select-lg"
            name="category"
            id="category"
          >
            <option selected>Select one</option>
            <option value=""></option>
            <option value="">Istanbul</option>
            <option value="">Jakarta</option>
          </select>
        </div>




      </div>
    </div>

    <div className="container">
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
      )}
    </div>
  </>
)
}