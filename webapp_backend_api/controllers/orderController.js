const connection = require('../data/db.js');

// Index all orders
function index(req, res) {
    const sql = 'SELECT * FROM orders';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    })
}

// Show single order
function show(req, res) {
    const id = req.params.id

    // Validation ID
    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ error: "Invalid order ID" });
    }

    const sql = 'SELECT * FROM orders WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        if (results.length === 0) return res.status(404).json({ error: "Order not found" });
        res.json(results[0])
    })
}

// Store new order
function store(req, res) {
    let { customer_id, order_number, price, shipping_price } = req.body;

    // Array to collect any validation errors
    const errors = [];

    // Validate input fields
    if (!customer_id || isNaN(customer_id) || Number(customer_id) <= 0) {
        errors.push("Invalid customer ID");
    }
    if (!order_number || isNaN(order_number) || Number(order_number) <= 0) {
        errors.push("Invalid order number");
    }
    if (!price || isNaN(price) || Number(price) < 0) {
        errors.push("Invalid price");
    }

    let freeShippingApplied = false;
    if (price >= 50) {
        shipping_price = 0;
        freeShippingApplied = true;

    } else {
        if (!shipping_price || isNaN(shipping_price) || Number(shipping_price) < 0) {
            shipping_price = 9.90;
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ error: "Validation Error", messages: errors });
    }

    const total_price = price + shipping_price;

    // Create/update timestamps
    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updated_at = created_at;

    // SQL Query for order insertion
    const sql = 'INSERT INTO orders (customer_id, order_number, price, shipping_price, total_price, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [customer_id, order_number, price, shipping_price, total_price, created_at, updated_at];

    // Running the query
    connection.query(sql, values, err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database query failed" })
        }


        const message = freeShippingApplied
            ? "Ordine aggiunto correttamente. Spedizione gratuita applicata 🎉"
            : "Ordine aggiunto correttamente";
        // Response in case of success
        res.status(201).json({ message });
    });
}

module.exports = {
    index,
    show,
    store
}