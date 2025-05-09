import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayouts"

//pages
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Homepage} />
            <Route path="/products/:slug" Component={Product} />






          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
