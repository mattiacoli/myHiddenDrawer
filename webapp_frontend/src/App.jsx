import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayouts"
// global context
import { GlobalProvider } from "./contexts/GlobalContext"

//pages
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import CondomPage from "./pages/CondomPage"
import SexToysPage from "./pages/SexToysPage"

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

          </Route>
        </Routes>
      </BrowserRouter>


    </GlobalProvider>
  )
}

export default App
