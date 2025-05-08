import { Link } from 'react-router-dom'


export default function Homepage() {
  return (
    <>

      {/* Jumbotron */}
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4">
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
        <section className="last_products">

        </section>


      </div>




    </>



  )
}