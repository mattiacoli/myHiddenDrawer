import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './Card/ProductCard'

export default function RelatedProducts() {

    const [relatedProducts, setRelatedProducts] = useState([])
    const { slug } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/products/${slug}/related/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRelatedProducts(data)
            })
            .catch(err => console.error(err))
    }, [slug])

    return (

        <>

            <div className="container related-products my-5">
                <h2>Prodotti Correlati</h2>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        relatedProducts.slice(0, 4).map(item => (

                            <ProductCard item={item} key={item.id} />

                        ))
                    }
                </div>

            </div>

        </>

    )
}