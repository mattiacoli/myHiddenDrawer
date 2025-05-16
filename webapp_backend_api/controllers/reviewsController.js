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

module.exports = {
  getAllReviews,
};
