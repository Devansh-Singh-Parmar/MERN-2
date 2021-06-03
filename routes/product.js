const express = require("express");
const router = express.Router();

const {
    getProductById,
    createProduct,
    getProduct,
    photo,
    updateProduct,
    deleteProduct,
    getAllProducts,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//All of parmas
router.param("userId", getUserById);
router.param("productId", getProductById);

//All of actual routes
router.post(
    "/product/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createProduct
);
//Read Routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//Delete Route
router.delete(
    "/product/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    deleteProduct
);

//Update Routes
router.put(
    "/product/:productId/:userId",
    isSignedIn,

    isAuthenticated,
    isAdmin,
    updateProduct
);
//Listing Routes
router.get("/products", getAllProducts);
module.exports = router;