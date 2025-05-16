import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Component for Product Card
import ProductCard from '../components/Card/ProductCard'
import Popup from '../components/Popup/Popup'
import ReviewsCard from '../components/ReviewsCard/ReviewsCard'
import { useGlobalContext } from '../contexts/GlobalContext'

export default function Homepage() {

  const [latest, setLatest] = useState([])
  const [promo, setPromo] = useState([])
  const { reviews = [] } = useGlobalContext()

  const productUrl = 'http://localhost:3000/api/v1/products'


  useEffect(() => {
    fetch(`${productUrl}/promotions`)
      .then(res => res.json())
      .then(data => {
        setPromo(data)
      })
      .catch(err => console.error(err))
  }, [])


  useEffect(() => {
    fetch(`${productUrl}/latest`)
      .then(res => res.json())
      .then(data => {

        setLatest(data)
      })
      .catch(err => console.error(err))
  }, [])



  return (
    <>

      {/* Jumbotron */}

      <div className="video-hero-wrapper">
        <div className="video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/eb4261f15e8844dbb7692c8d0c7438eb.mp4" type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="p-5 mb-4 jumbotron-base jumbotron-home">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col" style={{ maxWidth: '800px' }}>
                  <div className="container d-flex flex-column text-center">
                    <h1 className='hero-title'>Prontə ad entrare?</h1>
                    <p className='hero-text'>
                      Apri il cassetto dei tuoi desideri. <br />
                      Scopri prodotti selezionati per il piacere, la protezione e la libertà di esprimerti come vuoi, quando vuoi. <br />
                      Discreti, affidabili, sexy. Proprio come te.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >


      <div className="container">

        {/* Our Products */}

        <section className="products_category d-flex flex-column justify-content-center gap-3">
          <h3 className='text-center fs-1 pt-5'>I nostri Prodotti</h3>


          <div className=' mt-4 d-flex gap-2 justify-content-center gap-5'>
            <Link to='/products/condom' className='icon_category text-decoration-none text-black'>

              <img src="http://localhost:3000/images/xxl_comfort.jpg" alt="" className='card-img-top img-icon' />
              <p >Condom</p>
            </Link>

            <Link to='/products/sextoys' className=' icon_category text-decoration-none text-center text-black'>

              <img src="http://localhost:3000/images/all_nigth_long.jpg" alt="" className='card-img-top' style={{ width: '80px' }} />

              <p >Sex Toys</p>


            </Link>
          </div>
        </section>



        {/* Last Products */}
        <div className="last-products-section">
          <h2 className='pb-4'>Ultimi Arrivi</h2>
          <section className="last_products hide-scrollbar my-4">

            <div className="container">

              <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4 flex-nowrap mb-4 hide-scrollbar">

                {latest.slice(0, 8).map(item => (

                  <ProductCard item={item} key={item.id} />

                ))}
              </div>
            </div>
          </section>
        </div>


      </div>


      {/* Reviews */}
      <div className="bg_reviews">
        <div className="container pb-2">
          <h2 className='text-white py-4'>Cosa dicono di noi</h2>

          <div className="container">

            <section className='reviews hide-scrollbar'>
              <div className="container">
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 flex-nowrap mb-4 hide-scrollbar'>
                  {reviews?.slice(0, 8).map(item => (
                    <ReviewsCard item={item} key={item.id} />

                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>


      <div className="container">
        {/* promo products */}
        <section className='best_sellers hide-scrollbar my-4'>
          <div className="d-flex align-items-center justify-content-between gap-4 mb-3">
            <h2 className="pb-4">In Offerta</h2>
            <Link to="/promotions/all" className="show-all btn-base text-decoration-none">
              Mostra tutti
            </Link>
          </div>
          <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gy-4 flex-nowrap mb-4 hide-scrollbar">
              {promo.map(item => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      </div>









    </>



  )
}