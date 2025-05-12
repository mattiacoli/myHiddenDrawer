import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (query) {
      navigate(`/search_page?q=${query}`)
    }
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className='d-flex'>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cosa stai cercando?"
        />
        <button type="submit" className='btn btn-dark'>Cerca</button>
      </form>
    </div>
  )
}