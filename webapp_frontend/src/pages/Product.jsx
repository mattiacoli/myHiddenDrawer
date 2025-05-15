import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContext'
import RelatedProducts from '../components/RelatedProducts'

export default function Product() {

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart, wishlist, addToWishlist, removeFromWishlist } = useGlobalContext()
  const { slug } = useParams()

  const isInWishlist = wishlist.includes(product.id)
  const isInCart = cart.some(item => item.id === product.id);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products/' + slug)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
      .catch(err => console.error(err))
  }, [slug])

  //Scroll a inizio pagina all'apertura
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Handle wishlist
  function handleWishlistClick(e) {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  // Handle add to cart
  function handleAddToCart() {
    const productQuantity = { ...product, quantity };
    addToCart(productQuantity);
  }

  return (
    <>
      {/* Product Jumbotron */}
      <div className="jumbotron-base jumbotron-product p-5 mb-4">
        <div className="container-fluid py-5">

          <div className="row g-4" >

            <div className="col-md-12 col-lg-6 justify-content-center">
              <img className='img-fluid' src={`http://localhost:3000/images/${product.cover_image}`} alt={product.name} />
            </div>


            <div className="d-flex col-md-12 col-lg-6 flex-column justify-content-center align-items-start">
              <h1 className="display-5 fw-bold">{product.name}</h1>
              <p className="fs-4">
                {product.description}
              </p>
              <div className="d-flex gap-3 align-items-center">

                <div>
                  <label htmlFor="quantity" className="form-label me-2">Quantità:</label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control d-inline-block w-auto"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    disabled={isInCart} />
                </div>

                <button className="btn-base btn-primary-mhd btn-lg-mhd" onClick={handleAddToCart} disabled={isInCart}>
                  Aggiungi al carrello
                </button>

                <button
                  onClick={handleWishlistClick}
                  className="btn-icon-mhd btn-wishlist-mhd"
                  aria-label="Aggiungi o rimuovi dalla wishlist">
                  <i className={`bi ${isInWishlist ? 'bi-heart-fill' : 'bi-heart'} fs-4`}></i>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Product */}
      <div className="container">

        <div className="row">
          {/* Product images */}
          <div className=" col-md-6 col-xl-8" >
            <div className="image-scroll-container">
              {
                product.images?.map(image => (
                  <div key={image.id} className="scroll-image-wrapper">
                    <img
                      className='img-fluid'
                      src={`http://localhost:3000/images/${image.image_url}`}
                      alt={image.alt_text}
                      style={{ width: '600px', height: 'auto' }}
                    />
                  </div>
                ))
              }
            </div>

            {/* Tags */}
            <div className="pt-2">
              {product.tags?.map((tag, index) => (
                <span key={index} className="badge bg-primary me-1 text-center">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Sticky card price */}
          <div className="col-md-6 col-xl-4 sticky-details p-5">

            {/* Product details & buy */}
            <h4>
              {product.categories?.map((cat, index) => (
                <span key={index} className="badge badge-category me-1">
                  {cat.name}
                </span>
              ))}
            </h4>
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            {product.discount_percentage != 0 ? (
              <>
                <div className="price d-flex align-items-center gap-3">
                  <p className='final_price fs-4 fw-bold '>{product.final_price} &#8364;</p>
                  <p className='old_price fs-6 text-secondary'><s>{product.price} &#8364;</s></p>
                  <p className='discount badge text-bg-danger fs-6'>{parseFloat(product.discount_percentage).toFixed(0)}%</p>
                </div>

              </>
            ) : (
              <>
                <div className='fw-bold fs-3'>{product.price}€</div>
              </>
            )}
            <div>
              {product.available === 1 ? (
                <span>Prodotto disponibile <i className="bi bi-hand-thumbs-up-fill text-success"></i></span>
              ) : (
                <span>Non disponibile <i className="bi bi-hand-thumbs-down-fill text-danger"></i></span>
              )}
            </div>
            <ul className='list-unstyled mt-2'>
              <li><i className="bi bi-box-seam"></i> Pacco 100% anonimo</li>
              <li><i className="bi bi-check2-square"></i> Garanzia su prodotto di 2 anni</li>
              <li><i className="bi bi-tree"></i> Materiali certificati</li>
              <li><i className="bi bi-shield-lock"></i> Pagamento sicuro</li>
            </ul>

            <div className="d-flex align-items-center gap-3 mt-5 flex-wrap">
              {/* Input quantità */}
              <div>
                <label htmlFor="quantity" className="form-label me-2">Quantità:</label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control w-auto"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  disabled={isInCart} />
              </div>

              {/* Bottone Aggiungi al carrello */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn-base btn-primary-mhd btn-lg-mhd"
                  onClick={handleAddToCart}
                  disabled={isInCart} >
                  Aggiungi al carrello
                </button>

                {/* Cuore wishlist */}
                <button
                  onClick={handleWishlistClick}
                  className="btn-icon-mhd btn-wishlist-mhd"
                  aria-label="Aggiungi o rimuovi dalla wishlist">
                  <i className={`bi ${isInWishlist ? 'bi-heart-fill' : 'bi-heart'} fs-4`}></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <RelatedProducts />

      {/* Mobile price banner */}
      <div className="mobile-price">
        <div className="container d-flex justify-content-between align-items-center">
          <button
            onClick={handleWishlistClick}
            className="btn-icon-mhd btn-wishlist-mhd"
            aria-label="Aggiungi o rimuovi dalla wishlist">
            <i className={`bi ${isInWishlist ? 'bi-heart-fill' : 'bi-heart'} fs-4`}></i>
          </button>
          <div>
            <h6>{product.name}</h6>
            {product.discount_percentage != 0 ? (
              <>
                <div className="price d-flex align-items-center gap-1">
                  <p className='final_price fw-bold '>{product.final_price} &#8364;</p>
                  <p className='old_price text-secondary'><s>{product.price} &#8364;</s></p>
                  <p className='discount badge text-bg-danger'>{parseFloat(product.discount_percentage).toFixed(0)}%</p>
                </div>

              </>
            ) : (
              <>
                <div className='fw-bold'>{product.price}€</div>
              </>
            )}

          </div>
          <div className='d-flex flex-column gap-2'>
            <div>
              {product.available === 1 ? (
                <span>Disponibile <i className="bi bi-hand-thumbs-up-fill text-success"></i></span>
              ) : (
                <span>Non disponibile <i className="bi bi-hand-thumbs-down-fill text-danger"></i></span>
              )}
            </div>
            <div>
              <label htmlFor="quantity" className="form-label me-2">Quantità:</label>
              <input
                type="number"
                id="quantity"
                className="form-control d-inline-block w-auto"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                disabled={isInCart} />
            </div>
            <button
              className="btn-base btn-primary-mhd btn-lg-mhd"
              onClick={handleAddToCart}
              disabled={isInCart}>
              Aggiungi al carrello
            </button>
          </div>

        </div>
      </div>
    </>
  )
}