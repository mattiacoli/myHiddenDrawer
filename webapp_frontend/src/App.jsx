import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayouts"

//pages
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes >
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Homepage} />
            <Route path="/products/:slug" Component={Product} />






          </Route>
        </Routes>
      </BrowserRouter>


    </GlobalProvider>
  )
}

export default App
