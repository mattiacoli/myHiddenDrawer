import { useGlobalContext } from "../contexts/GlobalContext"
import { useState, useEffect } from "react"

import ProductCard from "../components/Card/ProductCard"

export default function CondomPage() {

  const { products = [] } = useGlobalContext()


  const [condoms, setCondoms] = useState([])

  useEffect(() => {

    const condoms = products.filter(product => product.categories === 'condom')
    setCondoms(condoms)

  }, [products])


  return (
    <div className="container mt-4">
      <h1>Condoms</h1>

      <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4  mt-4">

        {condoms.map(item => (
          <ProductCard item={item} key={item.id} />

        ))}
      </div>


    </div >
  )
}