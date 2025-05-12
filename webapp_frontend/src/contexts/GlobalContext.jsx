import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {


  const productUrl = 'http://localhost:3000/api/v1/products'

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {

    fetch(productUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  function addToCart(product) {
    console.log("Aggiunto al carrello:", product);
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId))
  }


  function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  return (
    <GlobalContext.Provider value={{ products, cart, setCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </GlobalContext.Provider>
  )

}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext }