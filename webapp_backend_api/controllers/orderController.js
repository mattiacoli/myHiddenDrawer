const connection = require('../data/db.js');

function index(req, res) {
    const sql = 'SELECT * FROM orders';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

function show(req, res) {
    const id = req.params.id
    const sql = 'SELECT * FROM orders WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        if (results.length === 0) return res.status(404).json({ err: "Product not found" });
        res.json(results[0])
    })
}

function store(req, res) {
    const { customer_id, order_number, price, shipping_price, total_price } = req.body;

    // Validate input fields
    if (!customer_id || !order_number || !price || !shipping_price || !total_price) {
        return res.status(400).json({ err: "All fields are required" });
    }

    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updated_at = created_at;
    const sql = 'INSERT INTO orders (customer_id, order_number, price, shipping_price, total_price, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [customer_id, order_number, price, shipping_price, total_price, created_at, updated_at];

    connection.query(sql, values, err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ err: "Database query failed" })
        }

        res.status(201).json({ message: 'Order added successfully' });
    });
}

module.exports = {
    index,
    show,
    store
}