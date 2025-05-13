import { useEffect, useState } from 'react'
import ProductCard from '../components/Card/ProductCard'

export default function Promotions() {
    const [promoProducts, setPromoProducts] = useState([])

    const productUrl = 'http://localhost:3000/api/v1/products'

    useEffect(() => {
        fetch(`${productUrl}/promotions/all`)
            .then(res => res.json())
            .then(data => setPromoProducts(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container my-5">
            <h1 className="mb-4">Tutti i Prodotti in Offerta</h1>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
                {promoProducts.map(product => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </div>
        </div>
    )
}