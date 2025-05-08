import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Homepage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data)
      })
      .catch(err => console.error(err))
  }, [])



  return (
    <>

      {/* Jumbotron */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
        </div>
      </div>

      <div className="container">

        {/* Our Products */}

        <section className="products_category d-flex flex-column justify-content-center">
          <h3 className='text-center'>I nostri Prodotti</h3>


          <div className=' mt-4 d-flex gap-2 justify-content-center'>
            <Link to='#' className='card text-decoration-none'>

              <img src="#" alt="" className='card-img-top' />

              <div className="card-body ">
                Condom
              </div>
            </Link>

            <Link to='#' className='card text-decoration-none'>

              <img src="#" alt="" className='card-img-top' />

              <div className="card-body ">
                Sex Toys
              </div>
            </Link>
          </div>
        </section>


        {/* Last Products */}
        <section className="last_products mt-4">
          <h2>Ultimi Arrivi</h2>
          <div className="contanier">

            <div className="row row-cols-sm-2 row-cols-md-4 gy-4 ">

              {products.slice(0, 8).map(item => (
                <div key={item.id} className="col">

                  <div className="card h-100">
                    <div className="card-header " style={{ height: '5rem' }}>
                      <h4>{item.name}</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        {item.description}
                      </p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* best sellers */}
        <section className='best_sellers mt-4'>
          <h2>Più venduti</h2>
          <div className="contanier">

            <div className="row row-cols-sm-2 row-cols-md-4 gy-4 ">

              {products.slice(9, 17).map(item => (
                <div key={item.id} className="col" >

                  <div className="card h-100">
                    <div className="card-header " style={{ height: '5rem' }}>
                      <h4>{item.name}</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        {item.description}
                      </p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </section>


      </div>




    </>



  )
}