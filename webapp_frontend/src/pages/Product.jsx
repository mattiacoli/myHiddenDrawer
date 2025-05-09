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
                                Acquista
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Product */}
            <div className="container">
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
                    <div className="col-4">
                        <h2>Prodotto</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae ratione beatae dolore perferendis suscipit nemo, commodi, dignissimos odit dolorem incidunt illo laboriosam facere impedit, distinctio nulla corrupti totam cum.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}