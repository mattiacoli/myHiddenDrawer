const connection = require("../data/db.js");

function index(req, res) {
    const sql = 'SELECT * FROM customers';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

function show(req, res) {
    const id = req.params.id
    const sql = 'SELECT * FROM customers WHERE id=?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" })

        if (results.length === 0) return res.status(404).json({ err: "Customer not found" })

        res.json(results[0])
    })
}

module.exports = {
    index,
    show
}