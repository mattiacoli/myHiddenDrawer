import { useGlobalContext } from "../contexts/GlobalContext"
import { Link } from "react-router-dom";


export default function Cart() {

  const { cart = [], removeFromCart, updateQuantity } = useGlobalContext()
  console.log("Cart:", cart);

  return (

    <>
      <div className="container my-5">
        <h2>Il tuo carrello</h2>
        {cart.length === 0 ? (
          <div className='text-center min-height-80'>
            <h2>Nessun prodotto trovato</h2>
          </div>
        ) : (
          <div className="row">
            {cart.map(item => (
              <div className="col-12 d-flex align-items-center mb-3" key={item.id}>
                <img src={`http://localhost:3000/images/${item.cover_image}`} alt={item.name} width={100} className="me-3" />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <div>Prezzo: {item.price}€</div>
                  <div className="d-flex align-items-center">
                    <label htmlFor={`quantity-${item.id}`} className="me-2 mb-0">Quantità:</label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="form-control me-2"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div>Totale: {(item.price * item.quantity).toFixed(2)}€</div>
                </div>
                <button className="btn-base btn-secondary-mhd btn-sm-mhd"
                  onClick={() => {
                    removeFromCart(item.id);
                    alert("Hai rimosso il prodotto dal carrello!");
                  }}>Rimuovi</button>
              </div>
            ))}
            <hr />
            <h4 className="text-end">
              Totale: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€
            </h4>
            <Link to="/checkout">
              <button className="btn-base btn-primary-mhd mt-3 w-100">
                Procedi al Checkout
              </button>
            </Link>

          </div>
        )}
      </div>
    </>

  )
}