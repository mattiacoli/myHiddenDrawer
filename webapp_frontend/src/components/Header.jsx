import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import Searchbar from "../components/Search/Searchbar"


export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const { cart, wishlist } = useGlobalContext()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleSearchClick = () => {
    setShowSearch(!showSearch)
  }


  return (
    <>
      <div className="shipping-banner text-center py-2">
        🚚 Spedizione gratuita per ordini superiori a 50€!
      </div>
      <header className={scrolled ? "scrolled" : ""}>
        <nav
          className="navbar navbar-expand-sm navbar-light"
        >
          <div className="header-container d-flex justify-content-around align-items-center ps-5 pe-5" style={{ width: "100%" }}>

            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*Menu */}
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/products/condom" aria-current="page">Condom</NavLink>

                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/products/sextoys" aria-current="page">Sex Toys</NavLink>
                </li>

              </ul>
            </div>

            {/* Logo */}
            <NavLink className="navbar-brand" to="/"><img src="/logo/my_hidden_drawer_logo.png" alt="logo" className="logo" style={{ width: "300px" }} /></NavLink>

            {/* Icons: Search, Cart, Wishlist */}
            <div className="collapse navbar-collapse justify-content-end " id="collapsibleNavId">
              <ul className="navbar-nav mt-2 mt-lg-0 ">
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
                    <div className="position-absolute" style={{
                      top: "100%",
                      right: 0,
                      zIndex: 1000,
                      width: "500px"
                    }}>
                      <Searchbar setShowSearch={setShowSearch} />
                    </div>
                  )}
                </li>
                <li className="nav-item position-relative">
                  <NavLink className="nav-link" to="/cart"><i className="bi bi-bag-heart"></i>
                    {cart.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center" style={{
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        color: 'white'
                      }}> {cart.length}
                        <span className="visually-hidden">Articoli nel carrello</span>
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="nav-item position-relative wishlist-icon">
                  <NavLink className="nav-link" to="/wishlist">
                    <i className="bi bi-heart"></i>
                    {wishlist.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center" style={{
                        width: '20px',
                        height: '20px',
                        fontSize: '12px',
                        color: 'white'
                      }}>
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

    </>

  )
}