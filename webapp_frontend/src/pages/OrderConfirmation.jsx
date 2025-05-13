import { useLocation } from "react-router-dom"

export default function OrderConfirmation() {
    const location = useLocation()
    const { order, cart, formData } = location.state

    return (
        <div className="container py-5">
            <h1>Ordine{order.order_number}, confermato ✅</h1>
            <p>Grazie per il tuo ordine {formData.name}! Riceverai una mail di conferma a breve.</p>

            <h3>Riepilogo ordine:</h3>
            <ul className="list-group mb-4">
                {cart.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>{item.name} x {item.quantity}</span>
                        <span>{(item.price * item.quantity).toFixed(2)} €</span>
                    </li>
                ))}
            </ul>
            <p>Totale: <strong>{order.total_price} €</strong></p>
            <p>Spedizione: <strong>{order.shipping_price === 0 ? 'Gratuita' : `${order.shipping_price}`}</strong></p>
        </div>
    )
}