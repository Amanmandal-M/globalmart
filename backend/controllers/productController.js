const { Product } = require("../models/productModel");

const errorResponse = (status, message) => {
    return {
        status,
        success: false,
        message,
    }
}
const successResponse = (statusCode, message, data) => {
    return {
        statusCode,
        success: true,
        message,
        data
    }

}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json(successResponse(201, "Retrieved all products successfully", products));
    } catch (error) {
        console.error('Error fetching products:'.red, error);
        res.status(500).json(errorResponse(500, 'Error fetching products:'));
    }
};

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json(errorResponse(404, "Product not found"));
        }
        res.status(200).json(successResponse(200, "Retrieved all products successfully"));
    } catch (error) {
        console.error('Error fetching product by ID:'.red, error);
        res.status(500).json(errorResponse(500, 'Error fetching product by ID:'));
    }
};

// exports.createProduct = async (req, res) => {
//     const { title, thumbnail,categoryId, description, price, category } = req.body;
//     try {
//         const newProduct = new Product({
//             name,
//             description,
//             price,
//             category,
//         });
//         await newProduct.save();
//         res.status(201).json(successResponse(201, "Product created successfully", newProduct));
//     } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };


// exports.updateProduct = async (req, res) => {
//     const productId = req.params.id;
//     const updatedProductData = req.body;
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
//         if (!updatedProduct) {
//             return res.status(404).json(errorResponse(404, 'Product not found'));
//         }
//         res.json(successResponse(updatedProduct));
//     } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.deleteProduct = async (req, res) => {
//     const productId = req.params.id;
//     try {
//         const deletedProduct = await Product.findByIdAndRemove(productId);
//         if (!deletedProduct) {
//             return res.status(404).json(errorResponse(404, 'Product not found'));
//         }
//         res.json(successResponse(deletedProduct));
//     } catch (error) {
//         console.error('Error deleting product:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.getProductsByCategory = async (req, res) => {
//     const category = req.query.search;
//     try {
//         const products = await Product.find({ category });
//         res.json(successResponse(products));
//     } catch (error) {
//         console.error('Error fetching products by category:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.paginateProducts = async (req, res) => {
//     const { page, limit } = req.query;
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + parseInt(limit);
//     try {
//         const paginatedProducts = await Product.find().skip(startIndex).limit(parseInt(limit));
//         res.json(successResponse(paginatedProducts));
//     } catch (error) {
//         console.error('Error paginating products:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.searchProducts = async (req, res) => {
//     const { search } = req.query;
//     const searchTerms = search.split(',');
//     try {
//         const filteredProducts = await Product.find({
//             $or: [
//                 { name: { $in: searchTerms } },
//                 { description: { $in: searchTerms } },
//             ],
//         });
//         res.json(successResponse(filteredProducts));
//     } catch (error) {
//         console.error('Error searching products:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.sortProductsByPrice = async (req, res) => {
//     const { price } = req.query;
//     let sortOrder = 1; // Default to ascending order

//     if (price === 'high') {
//         sortOrder = -1; // High to low
//     }

//     try {
//         const sortedProducts = await Product.find().sort({ price: sortOrder });
//         res.json(successResponse(sortedProducts));
//     } catch (error) {
//         console.error('Error sorting products by price:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };

// exports.filterProductsByPriceRange = async (req, res) => {
//     const { price_range } = req.query;
//     const [minPrice, maxPrice] = price_range.split('-').map(parseFloat);

//     if (isNaN(minPrice) || isNaN(maxPrice)) {
//         return res.status(400).json(errorResponse(400, 'Invalid price range format'));
//     }

//     try {
//         const filteredProducts = await Product.find({ price: { $gte: minPrice, $lte: maxPrice } });
//         res.json(successResponse(filteredProducts));
//     } catch (error) {
//         console.error('Error filtering products by price range:', error);
//         res.status(500).json(errorResponse(500, 'Internal Server Error'));
//     }
// };








