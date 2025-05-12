import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"


export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
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
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/search_page" aria-current="page"
                  ><i className="bi bi-search"></i>
                    <span className="visually-hidden">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="bi bi-bag-heart"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="bi bi-heart"></i></a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </header>

    </>

  )
}