const Product = require('../models/product');
const Category = require('../models/category');


exports.getIndex = (req, res, next) => {
    const products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/index',{
        title: 'Shopping',
        products: products,
        categories:categories,
        path: '/'
        
        });
}


exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    const categories = Category.getAll();

    res.render('shop/products',{
        title: 'Products',
        products: products,
        categories: categories,
        path: '/products'
            
        });
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    const categories = Category.getAll();

    res.render('shop/products',{
        title: 'Products',
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path: '/products'
            
        });
}

exports.getProduct = (req, res, next) => {
    
    
    const product = Product.getById(req.params.productid);

    res.render('shop/product-detail', {
        title:product.name,
        product:product,
        path:'/products'

    });
   
    

}
exports.getProductDetails = (req, res, next) => {
    res.render('shop/details',{
        title: 'Details',
        path: '/details'
        
        });
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart',{
        title: 'Cart',
        path: '/cart'
            
        });
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        title: 'Orders',
        path: '/orders'
            
        });
}

    
    // const products = [
    //     {name: 'SAMSUNG S8', price: 3000, image:'index.jpeg', description: 'iyi telefon'},
    //     {name: 'SAMSUNG S7', price: 2000, image:'index1.jpeg', description: 'az hafızalı'},
    //     {name: 'SAMSUNG S9', price: 4000, image:'index2.jpeg', description: 'güzel telefon'},
    //     {name: 'IPHONE 7S',  price: 5000, image:'index3.jpeg', description: 'pahalı'}
    // ]
    