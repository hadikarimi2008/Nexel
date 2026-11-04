const express = require("express");
const ProductsRouter = express.Router();

const {
    ProductsRouterGetproducts,
    ProductsRouterGetproduct,
    ProductsRouterPostproduct,
    ProductsRouterPutproduct,
    ProductsRouterDeleteproduct,
    ProductsRouterGetProductBySlug,
} = require("../controller/ProductsController");

const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const uploadProducts = require("../middlewares/uploadProducts");

ProductsRouter.get("/", ProductsRouterGetproducts);

ProductsRouter.get("/:id", ProductsRouterGetproduct);

ProductsRouter.get("/slug/:slug", ProductsRouterGetProductBySlug);

ProductsRouter.post(
    "/",
    auth,
    isAdmin,
    uploadProducts.single("image"),
    ProductsRouterPostproduct
);

ProductsRouter.put(
    "/:id",
    auth,
    isAdmin,
    uploadProducts.single("image"),
    ProductsRouterPutproduct
);

ProductsRouter.delete(
    "/:id",
    auth,
    isAdmin,
    ProductsRouterDeleteproduct
);

module.exports = ProductsRouter;