const connection = require('../data/db.js')

// Index all products
function index(req, res) {
    const sql = 'SELECT * FROM products';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

// Show single product
function show(req, res) {
    const slug = req.params.slug

    // Validation slug
    if (!slug || typeof slug !== 'string' || slug.trim().length === 0) {
        return res.status(400).json({ error: "Invalid product slug" });
    }

    const sql = 'SELECT * FROM products WHERE slug = ?';

    connection.query(sql, [slug], (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        if (results.length === 0) return res.status(404).json({ err: "Product not found" });
        res.json(results[0])
    })
}

module.exports = {
    index,
    show
}