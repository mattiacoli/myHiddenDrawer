const connection = require('../data/db.js')

function index(req, res) {
    const sql = 'SELECT * FROM products';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

function show(req, res) {
    const slug = req.params.name.toLowerCase().replaceAll(' ', '-');
    const sql = 'SELECT * FROM products WHERE slug=?'

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