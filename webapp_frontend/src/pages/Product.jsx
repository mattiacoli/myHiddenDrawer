import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {

  const [product, setProduct] = useState({})

  const { slug } = useParams()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products/' + slug)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {/* Product Jumbotron */}
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">

          <div className="row g-4" >

            <div className="col-4">
              <img src={`http://localhost:3000/images/${product.cover_image}`} alt={product.name} />
            </div>


            <div className="col-8">
              <h1 className="display-5 fw-bold">{product.name}</h1>
              <p className="col-md-8 fs-4">
                {product.description}
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Aggiungi al carrello
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* Product */}
      <div className="container">
        {/* Tags */}
        <div className="p-2">
          {product.tags?.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1 text-center">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="row">
          {/* Product images */}
          {
            product.images?.map(image => (
              <div className="col-8" key={image.id}>
                <img src={`http://localhost:3000/images/${image.image_url}`} alt={image.alt_text} />
              </div>
            ))

          }
          {/* Product details & buy */}
          <div className="col-4 sticky-details">
            <h4>
              {product.categories?.map((cat, index) => (
                <span key={index} className="badge bg-danger badge-categoria me-1">
                  {cat.name}
                </span>
              ))}
            </h4>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className='fw-bold fs-3'>{product.price}€</div>
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
            <button className="btn btn-primary btn-lg mt-5" type="button">
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>

    </>
  )
}