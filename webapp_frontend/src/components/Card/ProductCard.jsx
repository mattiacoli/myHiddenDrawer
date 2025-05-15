import { useGlobalContext } from '../../contexts/GlobalContext';
import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {

  const { wishlist, addToWishlist, removeFromWishlist, cart, addToCart, removeFromCart } = useGlobalContext();

  const isInWishlist = wishlist.includes(item.id);
  const isInCart = cart.find(product => product.id === item.id);

  const imageUrl = `http://localhost:3000/images`

  function handleWishlistClick(e) {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item.id);
    }
  };

  function handleCartClick(e) {
    e.preventDefault();
    if (isInCart) {
      removeFromCart(item.id);
    }
    else {
      addToCart(item);
    }
  }

  return (
    <Link to={`/products/${item.slug}`} className='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xxl-3 text-decoration-none' >

      <div className={`card position-relative   ${style.card}`}>

        <div className={`position-absolute top-0 start-0 m-2 d-flex gap-2 z-3 actions ${style.actions}`}>
          <button
            onClick={handleCartClick}
            className="btn btn-cart p-0 border-0 bg-transparent"
            aria-label="Aggiungi al carrello">
            <i className={`bi ${isInCart ? 'bi-bag-check-fill' : 'bi-bag-plus'} fs-4`}></i>
          </button>

          <button
            onClick={handleWishlistClick}
            className="btn btn-wishlist p-0 border-0 bg-transparent"
            aria-label="Aggiungi o rimuovi dalla wishlist">
            <i className={`bi ${isInWishlist ? 'bi-heart-fill' : 'bi-heart'} fs-4 text-danger`}></i>
          </button>
        </div>



        {
          item?.discount_percentage != 0 ? (

            <>
              <div className={`card-header bg-white position-relative ${style.card_header} `}  >
                <div className="badge position-absolute m-2 d-flex align-items-center gap-2 z-2">
                  <div className='discount badge text-bg-danger fs-5'>{parseFloat(item.discount_percentage).toFixed(0)}%
                  </div>
                </div>
                <img src={item.cover_image.length > 0 ? `${imageUrl}/${item.cover_image}` : `${imageUrl}/placeholder.jpg`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between p-2 p-md-3">
                <h4 className="mb-1">{item.name}</h4>
                <p className="small mb-2">
                  {item.description}
                </p>
                <div className="pricing d-flex gap-2 mt-2 fs-4">
                  <p className='old_price'><s>{item.price} &#8364;</s></p>
                  <p className='final_price fw-bold'>{item.final_price} &#8364;</p>
                </div>
              </div>
            </>

          ) : (
            <>
              <div className={`card-header bg-white position-relative ${style.card_header} `} >
                <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between p-2 p-md-3">
                <h4 className="mb-1">{item.name}</h4>
                <p className="small mb-2">
                  {item.description}
                </p>
                <p className='fs-4 mt-2'><strong>{item.price} &#8364;</strong></p>
              </div>
            </>
          )
        }
      </div>
    </Link>
  )
}