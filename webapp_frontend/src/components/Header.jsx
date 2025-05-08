export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">

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
                <a className="nav-link active" href="#" aria-current="page"
                >Condom
                  <span className="visually-hidden">(current)</span></a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sex Toys</a>
              </li>

            </ul>
          </div>

          {/* Logo */}
          <a className="navbar-brand" href="#"><img src="images/my_hidden_drawer_logo.png" alt="logo" className="logo" style={{ width: "300px" }} /></a>

          {/* Icons: Search, Cart, Wishlist */}
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page"
                ><i className="bi bi-search"></i>
                  <span className="visually-hidden">(current)</span></a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="bi bi-bag-heart"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="bi bi-heart"></i></a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <h1>Header</h1>
    </>

  )
}