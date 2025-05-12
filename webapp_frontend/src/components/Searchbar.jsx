import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




export default function Searchbar() {


  const [searchQuery, setSearchQuery] = useState('')

  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    if (searchQuery) {
      navigate(`/search_page?q=${searchQuery}`)
    }
  }


  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control"
          name="searchbar"
          id="searchbar"
          aria-describedby="helpId"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cosa stai cercando?"

        />

        <button typeof='submit' className='btn btn-dark'>Cerca</button>

      </form>

    </div>
  )
}