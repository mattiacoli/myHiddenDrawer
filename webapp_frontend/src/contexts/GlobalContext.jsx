import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {

  const imageUrl = `http://localhost:3000/images`

  const productUrl = 'http://localhost:3000/api/v1/products'

  const [products, setProducts] = useState()

  function getProducts() {

    useEffect(() => {

      fetch(productUrl)
        .then(res => res.json())
        .then(data => {
          setProducts(data)
        })
    }, [])
  }

}