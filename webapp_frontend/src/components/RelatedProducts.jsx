import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    }, [])

    return (

        <>

        </>

    )
}