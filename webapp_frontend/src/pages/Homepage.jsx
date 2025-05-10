import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Component for Product Card
import ProductCard from '../components/Card/ProductCard'


export default function Homepage() {

  const [latest, setLatest] = useState([])
  const [promo, setPromo] = useState([])

  const imageUrl = `http://localhost:3000/images`

  const productUrl = 'http://localhost:3000/api/v1/products'

  useEffect(() => {
    fetch(`${productUrl}/latest`)
      .then(res => res.json())
      .then(data => {

        setLatest(data)
      })
      .catch(err => console.error(err))

    fetch(`${productUrl}`)
      .then(res => res.json())
      .then(data => {
        const discountedProducts = data.filter(product => product.discount_percentage !== '0.00');
        setPromo(discountedProducts);
      })
      .catch(err => console.error(err));


  }, [])



  return (
    <>

      {/* Jumbotron */}
      <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-fluid py-5 text-center">

        </div>
      </div>

      <div className="container">

        {/* Our Products */}

        <section className="products_category d-flex flex-column justify-content-center gap-3">
          <h3 className='text-center fs-1'>I nostri Prodotti</h3>


          <div className=' mt-4 d-flex gap-2 justify-content-center gap-5'>
            <Link to='#' className='icon_category text-decoration-none text-black '>

              <img src="http://localhost:3000/images/xxl_comfort.jpg" alt="" className='card-img-top' style={{ width: '80px', scale: '1' }} />
              <p >Condom</p>
            </Link>

            <Link to='' className=' icon_category text-decoration-none text-center text-black'>

              <img src="http://localhost:3000/images/all_nigth_long.jpg" alt="" className='card-img-top' style={{ width: '80px' }} />

              <p >Sex Toys</p>


            </Link>
          </div>
        </section>


        {/* Last Products */}
        <section className="last_products my-4">
          <h2>Ultimi Arrivi</h2>
          <div className="contanier">

            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4 ">

              {latest.slice(0, 8).map(item => (
                <Link to={`/products/${item.slug}`} className='text-decoration-none' key={item.id}>
                  <ProductCard item={item} imageUrl={imageUrl} />
                </Link>
              ))}
            </div>
          </div>
        </section>



        {/* promo products */}
        <section className='best_sellers my-4'>
          <h2>In Offerta</h2>
          <div className="contanier">

            <div className="row row-cols-sm-1 row-cols-md-2  row-cols-lg-4 gy-4  ">

              {promo.slice(0, 8).map(item => (
                <Link to={`/products/${item.slug}`} className='text-decoration-none' key={item.id}>
                  <ProductCard item={item} imageUrl={imageUrl} />
                </Link>
              ))}


            </div>
          </div>
        </section>


      </div>




    </>



  )
}