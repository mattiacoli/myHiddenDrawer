import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayouts"
// global context
import { GlobalProvider } from "./contexts/GlobalContext"

//pages
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import CondomPage from "./pages/CondomPage"
import SexToysPage from "./pages/SexToysPage"
import SearchPage from "./pages/SearchPage"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import Promotions from "./pages/Promotions"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import FAQ from "./pages/Faq"
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes >
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Homepage} />
            <Route path="/products/:slug" Component={Product} />
            <Route path="/products/condom" Component={CondomPage} />
            <Route path="/products/sextoys" Component={SexToysPage} />
            <Route path="/cart" Component={Cart} />
            <Route path="/search_page" Component={SearchPage} />
            <Route path="/wishlist" Component={Wishlist} />
            <Route path="/checkout" Component={Checkout} />
            <Route path="/order-confirmation" Component={OrderConfirmation} />
            <Route path="/promotions/all" Component={Promotions} />
            <Route path="/about" Component={About} />
            <Route path="/faq" Component={FAQ} />
            <Route path="/privacy-policy" Component={PrivacyPolicy} />
            <Route path="*" Component={NotFound} />

          </Route>

        </Routes>
      </BrowserRouter>


    </GlobalProvider>
  )
}

export default App
