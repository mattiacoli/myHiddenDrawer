import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {


  const productUrl = 'http://localhost:3000/api/v1/products'

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState(() => {
    // Recupera la wishlist da localStorage, se presente
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });


  useEffect(() => {

    fetch(productUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  // Salva la wishlist nel localStorage ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToCart(product) {
    console.log("Aggiunto al carrello:", product);
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }])
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

  // Funzione per aggiungere un prodotto alla wishlist
  function addToWishlist(id) {
    if (!wishlist.includes(id)) {
      setWishlist(prevWishlist => [...prevWishlist, id]);
    }
  };

  // Funzione per rimuovere un prodotto dalla wishlist
  function removeFromWishlist(id) {
    setWishlist(prevWishlist => prevWishlist.filter(productId => productId !== id));
  };


  return (
    <GlobalContext.Provider value={{ products, cart, setCart, addToCart, removeFromCart, updateQuantity, wishlist, setWishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </GlobalContext.Provider>
  )

}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext }