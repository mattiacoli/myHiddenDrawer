const connection = require('../data/db.js')

// Index all products
function index(req, res) {
    const sql = `
    SELECT 
      products.*,
      GROUP_CONCAT(categories.name) as categories,
      (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = products.id) AS average_rating,
      (SELECT COUNT(*) FROM reviews r WHERE r.product_id = products.id) AS reviews_count
    FROM products
    LEFT JOIN category_product ON products.id = category_product.product_id
    LEFT JOIN categories ON category_product.category_id = categories.id
    GROUP BY products.id
    `;

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

// Get all promotions
function allPromotions(req, res) {
    const sql = `SELECT * FROM products WHERE discount_percentage > 0`;
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

// Get 4 products with promotions
function promotions(req, res) {
    const sql = `
    SELECT 
      p.id,
      p.name,
      p.description,
      p.final_price,
      p.price,
      COALESCE(p.cover_image, 'placeholder.jpg') AS cover_image,
      COALESCE(p.discount_percentage, 0) AS discount_percentage,
      p.slug,
      (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = p.id) AS average_rating,
      (SELECT COUNT(*) FROM reviews r WHERE r.product_id = p.id) AS reviews_count
    FROM products p
    WHERE p.discount_percentage > 0
    LIMIT 4
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("SQL Error in PROMOTIONS:", err);
            return res.status(500).json({ err: "Database query failed" });
        }
        res.json(results);
    })
}

// Get latest product
function latestProduct(req, res) {
    const sql = `
    SELECT 
      p.id,
      p.name,
      p.description,
      p.final_price,
      p.price,
      COALESCE(p.cover_image, 'placeholder.jpg') AS cover_image,
      COALESCE(p.discount_percentage, 0) AS discount_percentage,
      p.slug,
      (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = p.id) AS average_rating,
      (SELECT COUNT(*) FROM reviews r WHERE r.product_id = p.id) AS reviews_count
    FROM products p
    ORDER BY p.updated_at DESC
    LIMIT 8
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("SQL Error in LATEST PRODUCT:", err);
            return res.status(500).json({ error: 'Database query failed' })
        }
        res.json(results);
    })
}

// Show single product
function show(req, res) {
    const slug = req.params.slug; // Ottieni lo slug dalla richiesta
    const sqlProduct = `
  SELECT 
    p.*,
    (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = p.id) AS average_rating,
    (SELECT COUNT(*) FROM reviews r WHERE r.product_id = p.id) AS reviews_count
  FROM products p
  WHERE p.slug = ?
`;
    const sqlImages = 'SELECT * FROM images WHERE product_id = ?'; // Cerca le immagini usando product_id
    const sqlCategories = `
    SELECT c.*
    FROM categories c
    INNER JOIN category_product cp ON c.id = cp.category_id
    WHERE cp.product_id = ?
  `; // Cerca le categorie tramite la tabella pivot
    const sqlTags = `
    SELECT t.*
    FROM tags t
    INNER JOIN product_tag tp ON t.id = tp.tag_id
    WHERE tp.product_id = ?
  `; // Cerca i tag tramite la tabella pivot
    // Prima query: trova il prodotto usando lo slug
    connection.query(sqlProduct, [slug], (err, results) => {
        if (err) return res.status(500).json('Server Error');
        if (results.length === 0) return res.status(404).json({ error: 'Product not found' });
        const product = results[0]; // Ottieni il prodotto trovato (incluso il suo id)
        // Seconda query: trova le immagini usando product_id
        connection.query(sqlImages, [product.id], (err, images) => {
            if (err) return res.status(500).json('Server Error');
            product.images = images; // Aggiungi le immagini al prodotto
            // Terza query: trova le categorie tramite la tabella pivot
            connection.query(sqlCategories, [product.id], (err, categories) => {
                if (err) return res.status(500).json('Server Error');
                product.categories = categories; // Aggiungi le categorie al prodotto
                // Quarta query: trova i tag tramite la tabella pivot
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return res.status(500).json('Server Error');
                    product.tags = tags; // Aggiungi i tag al prodotto
                    // Rispondi con il prodotto, immagini, categorie e tag
                    res.json(product);
                });
            });
        });
    });


}

function related(req, res) {

    const { slug } = req.params;

    const relatedSql = `
    SELECT 
        p.*,
        cp.category_id,
        c.name AS category_name,
        GROUP_CONCAT(DISTINCT pt.tag_id) AS tag_ids,
        GROUP_CONCAT(DISTINCT t.name) AS tag_names,
        (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = p.id) AS average_rating,
        (SELECT COUNT(*) FROM reviews r WHERE r.product_id = p.id) AS reviews_count
    FROM products p
    JOIN category_product cp ON cp.product_id = p.id
    JOIN categories c ON c.id = cp.category_id
    JOIN product_tag pt ON pt.product_id = p.id
    JOIN tags t ON t.id = pt.tag_id
    WHERE p.id IN (
        SELECT pt1.product_id
        FROM product_tag pt1
        WHERE pt1.product_id != (SELECT id FROM products WHERE slug = ?)
        AND NOT EXISTS (
            -- Trova i tag del prodotto corrente che non sono presenti nel prodotto correlato
            SELECT pt2.tag_id
            FROM product_tag pt2
            WHERE pt2.product_id = (SELECT id FROM products WHERE slug = ?)
            AND pt2.tag_id NOT IN (
                SELECT pt3.tag_id
                FROM product_tag pt3
                WHERE pt3.product_id = pt1.product_id
            )
        )
    )
    GROUP BY p.id, cp.category_id, c.name
    ORDER BY p.updated_at DESC
  `
        ;

    connection.query(relatedSql, [slug, slug, slug, slug], (err, results) => {
        if (err) {
            console.error('Errore nella query dei correlati:', err);
            return res.status(500).json({ message: 'Errore del server' });
        }

        res.status(200).json(results);
    });
};

// Search
function search(req, res) {
    const { name, category, minPrice, maxPrice, createdAfter, createdBefore } = req.query;
    let query = `
        SELECT DISTINCT 
          p.*,
          c.name AS category,
          (SELECT CAST(COALESCE(AVG(r.vote), 0) AS DECIMAL(3,2)) FROM reviews r WHERE r.product_id = p.id) AS average_rating,
          (SELECT COUNT(*) FROM reviews r WHERE r.product_id = p.id) AS reviews_count
        FROM products p
        JOIN category_product cp ON p.id = cp.product_id
        JOIN categories c ON cp.category_id = c.id
        WHERE 1 = 1
        `

    const params = [];

    if (name) {
        query += " AND REPLACE(LOWER(p.name), ' ', '') LIKE ?";
        const searchTerm = name.toLowerCase().replace(/\s+/g, '');
        params.push(`%${searchTerm}%`);
    }

    if (category) {
        query += " AND REPLACE(LOWER(c.name), ' ', '') LIKE ?";
        const categoryTerm = category.toLowerCase().replace(/\s+/g, '');
        params.push(`%${categoryTerm}%`);
    }

    if (minPrice) {
        query += "AND p.final_price >= ? ORDER BY p.final_price ASC"
        params.push(minPrice);
    }

    if (maxPrice) {
        query += "AND p.final_price <= ? ORDER BY p.final_price ASC"
        params.push(maxPrice);
    }

    if (createdAfter) {
        query += " AND p.updated_at >= ? ORDER BY p.updated_at ASC";
        params.push(createdAfter);
    }

    if (createdBefore) {
        query += "AND p.updated_at <= ? ORDER BY p.updated_at ASC";
        params.push(createdBefore);
    }

    connection.query(query, params, (err, results) => {
        if (err) return res.status(500).json({ error: 'Server Error' });
        if (results.length === 0) return res.status(404).json({ message: 'No products found' });
        res.json(results);
    });
}

module.exports = {
    index,
    show,
    latestProduct,
    search,
    related,
    promotions,
    allPromotions
}