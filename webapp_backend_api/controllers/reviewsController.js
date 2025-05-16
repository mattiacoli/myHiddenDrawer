const connection = require('../data/db.js')

function getAllReviews(req, res) {
  const query = 'SELECT * FROM reviews';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Errore nella query:', err);
      return res.status(500).json({ error: 'Errore nel recupero delle recensioni' });
    }

    res.json(results);
  });
};

function storeReviews(req, res) {
  const id = Number(req.params.id)
  const { author, title, vote, text } = req.body

  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ")
  const updated_at = created_at

  const insertSql = 'INSERT INTO reviews (product_id, author, title, vote, text, created_at, updated_at) VALUES (?,?,?,?,?,?,?)'
  const values = [id, author, title, vote, text, created_at, updated_at]

  connection.query(insertSql, values, (error, results) => {
    if (err) return res.status(500).json({ error: err.message })
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Product not found' })
    res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId })

  })

}

module.exports = {
  getAllReviews,
  storeReviews
};



