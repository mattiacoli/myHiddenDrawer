import { NavLink, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import Searchbar from "../components/Search/Searchbar"


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const { cart, wishlist, updateQuantity, removeFromCart } = useGlobalContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCartPanel, setShowCartPanel] = useState(false)

  const toggleCartPanel = () => {
    setShowCartPanel(!showCartPanel)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = (e) => {
      // Chiudi il menu se il click è fuori dal menu e non sul toggle button
      if (!e.target.closest('.navbar-collapse') &&
        !e.target.classList.contains('navbar-toggler') &&
        !e.target.classList.contains('navbar-toggler-icon')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  const handleSearchClick = () => {
    setShowSearch(!showSearch)
  }

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <>
      <div className="shipping-banner text-center py-2">
        🚚 Spedizione gratuita per ordini superiori a 50€!
      </div>
      <header className={scrolled ? "scrolled" : ""}>
        <nav
          className="navbar navbar-expand-md navbar-light"
        >
          <div className="header-container d-flex justify-content-around align-items-center ps-5 pe-5" style={{ width: "100%" }}>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggleClick}
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon small"></span>
            </button>

            {/*Menu */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="collapsibleNavId">
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item fs-5">
                  <NavLink className="nav-link " to="/products/condom" aria-current="page"
                    onClick={handleMenuItemClick}
                  >Condom</NavLink>

                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/products/sextoys" aria-current="page"
                    onClick={handleMenuItemClick} 
                  >Sex Toys</NavLink>
                </li>

              </ul>
            </div>

            {/* Logo */}
            <NavLink className="navbar-brand" to="/"><img src="/logo/my_hidden_drawer_logo.png" alt="logo" className="logo" /></NavLink>

            {/* Icons: Search, Cart, Wishlist */}
            <div className="justify-content-end " id="iconsContainer">
              <ul className="navbar-nav mt-2 mt-lg-0 d-flex gap-1">
                <li className="nav-item position-relative">
                  <button
                    className="nav-link active"
                    onClick={handleSearchClick}
                    aria-current="page"
                  >
                    <i className="bi bi-search"></i>
                    <span className="visually-hidden">Search</span>
                  </button>
                  {showSearch && (
                    <div className="searchbar-dropdown">
                      <Searchbar setShowSearch={setShowSearch} />
                    </div>
                  )}
                </li>
                <li className="nav-item position-relative">
                  <button className="nav-link" onClick={toggleCartPanel}><i className="bi bi-bag-heart"></i>
                    {cart.length > 0 && (
                      <span className="badge-counter">
                        {cart.length}
                        <span className="visually-hidden">Articoli nel carrello</span>
                      </span>
                    )}
                  </button>
                </li>
                <li className="nav-item position-relative wishlist-icon">
                  <NavLink className="nav-link" to="/wishlist">
                    <i className="bi bi-heart"></i>
                    {wishlist.length > 0 && (
                      <span className="badge-counter">
                        {wishlist.length}
                        <span className="visually-hidden">Articoli nella wishlist</span>
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </header>


      {/* Pannello carrello */}
      {showCartPanel && (
        <div className={`cart-panel shadow p-4 bg-white ${showCartPanel ? "show" : ""}`}>
          <button className="btn-close mb-3" onClick={toggleCartPanel}></button>
          <h4>Il tuo carrello</h4>
          {cart.length === 0 ? (
            <p>Il carrello è vuoto 😢</p>
          ) : (
            <div>
              {cart.map(item => (
                <div className="d-flex align-items-center mb-3" key={item.id}>
                  <img src={`http://localhost:3000/images/${item.cover_image}`} alt={item.name} width={60} className="me-3" />
                  <div className="flex-grow-1">
                    <h6>{item.name}</h6>
                    <div>Prezzo: {item.price}€</div>
                    <div className="d-flex align-items-center">
                      <label htmlFor={`quantity-${item.id}`} className="me-2 mb-0">Qtà:</label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="form-control me-2"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div>Totale: {(item.price * item.quantity).toFixed(2)}€</div>
                  </div>
                  <button className="btn-icon-mhd btn-wishlist-mhd" onClick={() => { removeFromCart(item.id); alert("Hai rimosso il prodotto dal carrello!"); }}><i className="bi bi-trash"></i></button>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <strong>Totale:</strong>
                <span>{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€</span>
              </div>
              <Link to="/checkout">
                <button className="btn-base btn-primary-mhd w-100 mt-3" onClick={toggleCartPanel}>Procedi al Checkout</button>
              </Link>
              <Link to="/cart">
                <button className="btn-base btn-outline-primary-mhd w-100 mt-3" onClick={toggleCartPanel}>Vai alla pagina del carrello</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>

  )
}