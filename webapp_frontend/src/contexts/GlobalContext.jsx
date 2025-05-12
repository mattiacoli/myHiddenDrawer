import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()


function GlobalProvider({ children }) {


  const productUrl = 'http://localhost:3000/api/v1/products'

  const [products, setProducts] = useState([])

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

  // Funzione per aggiungere un prodotto alla wishlist
  const addToWishlist = (id) => {
    if (!wishlist.includes(id)) {
      setWishlist(prevWishlist => [...prevWishlist, id]);
    }
  };

  // Funzione per rimuovere un prodotto dalla wishlist
  const removeFromWishlist = (id) => {
    setWishlist(prevWishlist => prevWishlist.filter(productId => productId !== id));
  };

  return (
    <GlobalContext.Provider value={{ products, wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </GlobalContext.Provider>
  )

}

function useGlobalContext() {
  const context = useContext(GlobalContext)
  return context
}

export { GlobalProvider, useGlobalContext }