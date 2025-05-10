import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {


  const productUrl = 'http://localhost:3000/api/v1/products'

  const [products, setProducts] = useState([])


  useEffect(() => {

    fetch(productUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])


  return (
    <GlobalContext.Provider value={{ products }}>
      {children}
    </GlobalContext.Provider>
  )

}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext }