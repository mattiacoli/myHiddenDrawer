import { useState, useEffect } from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'
import ProductCard from '../components/Card/ProductCard'
import { useSearchParams } from 'react-router-dom'

export default function SearchPage() {
  const { products = [] } = useGlobalContext()
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState([...products])
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')

  const searchEndPoint = `http://localhost:3000/api/v1/products/search?name=${searchQuery}`

  useEffect(() => {
    if (searchQuery) {
      fetch(searchEndPoint)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFilteredProducts(data)
        })
    }
  }, [searchQuery])

  function handleSearch(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-fluid py-5 text-center">
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              name="searchbar"
              id="searchbar"
              aria-describedby="helpId"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Cosa stai cercando?"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4 ">
          {filteredProducts.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}