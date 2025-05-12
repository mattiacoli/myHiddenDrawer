import { useGlobalContext } from '../../contexts/GlobalContext';
import style from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {

  const { wishlist, addToWishlist, removeFromWishlist } = useGlobalContext();
  const isInWishlist = wishlist.includes(item.id);

  const imageUrl = `http://localhost:3000/images`

  function handleWishlistClick(e) {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item.id);
    }
  };

  return (
    <Link to={`/products/${item.slug}`} className='col text-decoration-none' >

      <div className={`card position-relative ${style.card}`}>

        <button
          onClick={handleWishlistClick}
          className="btn position-absolute top-0 start-0 m-2 p-0 border-0 bg-transparent z-3"
          aria-label="Aggiungi o rimuovi dalla wishlist">
          <i className={`bi ${isInWishlist ? 'bi-heart-fill' : 'bi-heart'} fs-4 text-danger`}></i>
        </button>

        {
          item?.discount_percentage != 0 ? (

            <>
              <div className="card-header bg-white position-relative">
                <div className="badge position-absolute m-2 d-flex align-items-center gap-2 z-2">
                  <div className='discount badge text-bg-danger fs-5'>{parseFloat(item.discount_percentage).toFixed(0)}%
                  </div>
                </div>
                <img src={item.cover_image.length > 0 ? `${imageUrl}/${item.cover_image}` : `${imageUrl}/placeholder.jpg`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h4>{item.name}</h4>
                <p className=' '>
                  {item.description}
                </p>
                <div className="pricing text-end d-flex gap-3 justify-content-end  mt-auto">
                  <p className='old_price fs-4'><s>{item.price} &#8364;</s></p>
                  <p className='final_price fs-4 fw-bold'>{item.final_price} &#8364;</p>
                </div>
              </div>
            </>

          ) : (
            <>
              <div className="card-header bg-white position-relative">
                <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h4>{item.name}</h4>
                <p className=' '>
                  {item.description}
                </p>
                <p className='text-end fs-4 mt-auto'><strong>{item.price} &#8364;</strong></p>
              </div>
            </>
          )
        }
      </div>
    </Link>
  )
}