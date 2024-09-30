const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(bodyParser.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/product_review', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Define the Product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [
        {
            user: { type: String, required: true },
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String, required: true },
        },
    ],
});

const Product = mongoose.model('Product', productSchema);

// API endpoints

// Route to add a new product
app.post('/api/products', async (req, res) => {
    try {
        const { name, description, image } = req.body;

        // Validate request data
        if (!name || !description || !image) {
            return res.status(400).json({ message: 'Incomplete product data' });
        }

        // Create a new product
        const newProduct = new Product({ name, description, image, reviews: [] });

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with the newly added product
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to add a review to a product
app.post('/api/products/:id/review', async (req, res) => {
    const { user, rating, comment } = req.body;

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Push new review into the reviews array
        product.reviews.push({ user, rating, comment });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(400).json({ message: error.message });
    }
});
app.get('/api/products/:id/review', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to delete a product by ID
app.delete('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        // Find the product by ID and delete it from the database
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted', deletedProduct });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
