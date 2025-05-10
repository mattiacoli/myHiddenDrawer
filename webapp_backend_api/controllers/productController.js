const connection = require('../data/db.js')

// Index all products
function index(req, res) {
    const sql = `SELECT products.* , GROUP_CONCAT(categories.name) as categories
        FROM products
        LEFT JOIN category_product ON products.id = category_product.product_id
        LEFT JOIN categories ON category_product.category_id = categories.id
        GROUP BY products.id`

    connection.query(sql, (err, results) => {

        if (err) return res.status(500).json({ err: "Database query failed" });
        res.json(results);
    })
}

// Get latest product
function latestProduct(req, res) {
    const sql = 'SELECT * FROM products ORDER BY updated_at DESC';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        res.json(results);
    })
}

// Show single product
function show(req, res) {
    const slug = req.params.slug;

    const sqlProduct = 'SELECT * FROM products WHERE slug = ?';
    const sqlImages = 'SELECT * FROM images WHERE product_id = ?';
    const sqlCategories = `
    SELECT c.* FROM categories c
    INNER JOIN category_product cp ON c.id = cp.category_id
    WHERE cp.product_id = ?
  `;
    const sqlTags = `
    SELECT t.* FROM tags t
    INNER JOIN product_tag tp ON t.id = tp.tag_id
    WHERE tp.product_id = ?
  `;

    connection.query(sqlProduct, [slug], (err, results) => {
        if (err) {
            console.error('Errore nella query sqlProduct:', err);
            return res.status(500).json('Server Error');
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const product = results[0];

        connection.query(sqlImages, [product.id], (err, images) => {
            if (err) {
                console.error('Errore nella query sqlImages:', err);
                return res.status(500).json('Server Error');
            }

            product.images = images;

            connection.query(sqlCategories, [product.id], (err, categories) => {
                if (err) {
                    console.error('Errore nella query sqlCategories:', err);
                    return res.status(500).json('Server Error');
                }

                product.categories = categories;

                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) {
                        console.error('Errore nella query sqlTags:', err);
                        return res.status(500).json('Server Error');
                    }

                    product.tags = tags;

                    // ---- QUERY PRODOTTI CORRELATI PER TAG ----
                    const sqlRelated = `
            SELECT p.*, 
                   GROUP_CONCAT(DISTINCT i.image_url) AS image_urls,
                   GROUP_CONCAT(DISTINCT c.name) AS categories,
                   GROUP_CONCAT(DISTINCT t.name) AS tags
            FROM products p
            LEFT JOIN images i ON p.id = i.product_id
            LEFT JOIN category_product cp ON p.id = cp.product_id
            LEFT JOIN categories c ON cp.category_id = c.id
            LEFT JOIN product_tag pt ON p.id = pt.product_id
            LEFT JOIN tags t ON pt.tag_id = t.id
            WHERE pt.tag_id IN (
              SELECT tag_id FROM product_tag WHERE product_id = ?
            )
            AND p.id != ?
            GROUP BY p.id
            LIMIT 4
          `;

                    connection.query(sqlRelated, [product.id, product.id], (err, relatedProducts) => {
                        if (err) {
                            console.error('Errore nella query sqlRelated:', err);
                            return res.status(500).json('Server Error');
                        }

                        const formattedRelated = relatedProducts.map(prod => ({
                            ...prod,
                            image_urls: prod.image_urls ? prod.image_urls.split(',') : [],
                            categories: prod.categories ? prod.categories.split(',') : [],
                            tags: prod.tags ? prod.tags.split(',') : [],
                        }));

                        res.json({
                            ...product,
                            related_products: formattedRelated,
                        });
                    });
                });
            });
        });
    });
}



// Search
function search(req, res) {
    const { name, category } = req.query;
    let query = `
        SELECT DISTINCT p.*, c.name AS category
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

    if (promotion === 'true') {
        query += " AND p.promotion = 1";
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
    search
}