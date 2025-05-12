import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../contexts/GlobalContext'
import RelatedProducts from '../components/RelatedProducts'

export default function Product() {

    const [product, setProduct] = useState({})
    const { addToCart } = useGlobalContext()
    const { slug } = useParams()

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/products/' + slug)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
            .catch(err => console.error(err))
    }, [slug])

    return (
        <>
            {/* Product Jumbotron */}
            <div className="jumbotron-product p-5 mb-4 rounded-3">
                <div className="container-fluid py-5">

                    <div className="row g-4" >

                        <div className="col-md-12 col-lg-4">
                            <img src={`http://localhost:3000/images/${product.cover_image}`} alt={product.name} />
                        </div>


                        <div className="d-flex col-md-12 col-lg-8 flex-column justify-content-end align-items-start">
                            <h1 className="display-5 fw-bold">{product.name}</h1>
                            <p className="fs-4">
                                {product.description}
                            </p>
                            <button className="btn btn-primary btn-lg add-to-cart" type="button">
                                Aggiungi al carrello
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Product */}
            <div className="container">

                <div className="row align-items-start">
                    {/* Product images */}
                    <div className="col-md-12 col-lg-8" >
                        {
                            product.images?.map(image => (
                                <div key={image.id}>
                                    <img className='mt-3' src={`http://localhost:3000/images/${image.image_url}`} alt={image.alt_text} />
                                </div>


                            ))

                        }

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


                    <div className="col-md-12 col-lg-4 sticky-details p-5">

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
                        <button className="btn btn-primary btn-lg mt-5 add-to-cart" type="button"
                            onClick={() => {
                                addToCart(product);
                                alert("Prodotto aggiunto al carrello!");
                            }}>
                            Aggiungi al carrello
                        </button>
                    </div>
                </div>
            </div>

            <RelatedProducts />

        </>
    )
}