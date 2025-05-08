const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const errorHandler = require('./middlewares/serverError');
const notFound = require('./middlewares/notFound');
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders');
const customerRouter = require('./routes/customers')

// Middleware
app.use(cors(
    {
        origin: process.env.FRONT_URL || 'http://localhost:5173',
    }
))

// Middleware per parsing JSON
app.use(express.json());

// Middleware per assets middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
})

// Product router
app.use('/api/v1/products', productRouter)

// Order router
app.use('/api/v1/orders', orderRouter)

// Customer router
app.use('/api/v1/customers', customerRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})


app.use(errorHandler)

app.use(notFound)