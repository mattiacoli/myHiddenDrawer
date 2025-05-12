import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import ProductCard from "../components/Card/ProductCard";

export default function Wishlist() {
    const { products, wishlist, addToWishlist, removeFromWishlist } = useGlobalContext();

    // Filtra i prodotti che sono nella wishlist
    const wishedProducts = products.filter(p => wishlist.includes(p.id));

    return (
        <div className="container my-5">
            <h1>Wishlist</h1>

            {/* Se non ci sono prodotti nella wishlist */}
            {wishedProducts.length === 0 ? (
                <p className="text-center">Nessun prodotto nella tua lista dei desideri.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* Mappa ogni prodotto che è nella wishlist */}
                    {wishedProducts.map(item => (
                        <div key={item.id} className="col">
                            <ProductCard item={item} />
                            <button onClick={() => removeFromWishlist(item.id)}>Rimuovi</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Mostra tutti i prodotti con la possibilità di aggiungerli alla wishlist */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {products.map(item => (
                    <div key={item.id} className="col">
                        <ProductCard item={item} />
                        <button onClick={() => addToWishlist(item.id)}>Aggiungi alla Wishlist</button>
                    </div>
                ))}
            </div>
        </div>
    )
}