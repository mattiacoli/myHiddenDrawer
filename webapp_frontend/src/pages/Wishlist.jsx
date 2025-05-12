import { useGlobalContext } from "../contexts/GlobalContext";
import ProductCard from "../components/Card/ProductCard";

export default function Wishlist() {
    const { products, wishlist } = useGlobalContext();

    // Filtra i prodotti che sono nella wishlist
    const wishedProducts = products.filter(p => wishlist.includes(p.id));

    return (
        <div className="container my-5">
            <h1>Wishlist</h1>

            {/* Se non ci sono prodotti nella wishlist */}
            {wishedProducts.length === 0 ? (
                <p className="text-center">Nessun prodotto nella tua lista dei desideri.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {/* Mappa ogni prodotto che è nella wishlist */}
                    {wishedProducts.map(item => (
                        <div key={item.id} className="col">
                            <ProductCard item={item} />
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}
