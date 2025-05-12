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

    // Validation ID
    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ error: "Invalid customer ID" });
    }

    const sql = 'SELECT * FROM customers WHERE id=?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" })

        if (results.length === 0) return res.status(404).json({ err: "Customer not found" })

        res.json(results[0])
    })
}

function store(req, res) {
    const { name, lastname, phone_number, email, address, postcode, city, province, country } = req.body

    // Array to collect any validation errors
    const errors = [];

    // // Validate input fields
    if (!name || typeof name !== 'string' || name.trim().length < 3) errors.push("Name must be a string and at least 3 characters long");
    if (!lastname || typeof lastname !== 'string' || lastname.trim().length < 3) errors.push("Lastname must be a string and at least 3 characters long");

    if (!phone_number || !/^\+?\d{1,4}[\s\(\)-]?\d{10}$/.test(phone_number.replace(/[^\d+]/g, ''))) {
        errors.push("Phone number must have exactly 10 digits, with optional international prefix (+)");
    }


    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push("Invalid email format");
    if (!address || typeof address !== 'string') errors.push("Invalid address");

    if (!postcode || !/^\d{5,6}$/.test(postcode)) {
        errors.push("Postcode must be a valid 5 or 6 digit number");
    }

    if (!city || typeof city !== 'string') errors.push("Invalid city");
    if (!province || typeof province !== 'string') errors.push("Invalid province");
    if (!country || typeof country !== 'string') errors.push("Invalid country");

    if (errors.length > 0) {
        return res.status(400).json({ error: "Validation Error", messages: errors });
    }

    // Create/update timestamps
    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updated_at = created_at;

    // SQL Query for order insertion
    const sql = 'INSERT INTO customers (name, lastname, phone_number, email, address, postcode, city, province, country, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

    const values = [name, lastname, phone_number, email, address, postcode, city, province, country, created_at, updated_at]

    // Running the query
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ err: "Database query failed" })
        }

        // Response in case of success
        res.status(201).json({ message: 'Customer added successfully', id: result.insertId });
    })

}

module.exports = {
    index,
    show,
    store
}