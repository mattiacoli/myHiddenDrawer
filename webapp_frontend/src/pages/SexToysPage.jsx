import { useGlobalContext } from "../contexts/GlobalContext"
import { useState, useEffect } from "react"
import ProductCard from "../components/Card/ProductCard"

export default function SexToysPage() {
  const { products = [] } = useGlobalContext()


  const [sextoys, setSextoys] = useState([])

  useEffect(() => {

    const sextoys = products.filter(product => product.categories === 'sex-toys')
    setSextoys(sextoys)

  }, [products])


  return (


    <>
      <div className="p-5 mb-4 bg-light rounded-3 jumbotron_sextoys">
        <div className="container-fluid py-5 text-center">
          <h1>Sex Toys</h1>

        </div>
      </div>


      <div className="container mt-4">


        <div className=" row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4  mt-4">

          {sextoys.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>


      </div >
    </>
  )
}