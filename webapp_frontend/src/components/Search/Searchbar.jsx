import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Searchbox.module.css'

export default function Searchbar({ setShowSearch }) {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    setQuery(searchParams.get('q') || '')
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()
    setShowSearch?.(false)
    if (window.location.pathname === '/search_page') {
      setSearchParams({ q: query })
    } else {
      navigate(`/search_page?q=${query}`)
    }
  }

  return (
    <div className="mt-4 " >
      <form onSubmit={handleSubmit} className={`d-flex bg-white rounded-5 p-2 gap-2 shadow-sm ${styles.search_form}`} >
        <input
          type="text"
          className={`form-control  ${styles.search_input}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cosa stai cercando?"
        />
        <button type="submit" className='btn  btn-outline-dark rounded-pill'><i className="bi bi-search"></i></button>
      </form>
    </div>
  )
}