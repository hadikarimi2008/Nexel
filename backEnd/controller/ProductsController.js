const pool = require("../database/MySqlDataBase");

const ProductsRouterGetproducts = async (req, res) => {
    const [data] = await pool.query("SELECT * FROM products");
    res.json(data);
};

const ProductsRouterGetproduct = async (req, res) => {
    const { id } = req.params;

    const [data] = await pool.query(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );

    res.send(data[0]);
};


const ProductsRouterPostproduct = async (req, res) => {
    try {
        const {
            title,
            slug,
            description,
            price,
            discount,
            category,
            brand,
            rating,
            stock,
        } = req.body;

        const image = req.file ? req.file.filename : null;

        const discountNumber =
            discount === undefined || discount === "" ? 0 : Number(discount);

        if (
            !title ||
            !slug ||
            !description ||
            price === undefined ||
            price === "" ||
            !category ||
            !brand ||
            rating === undefined ||
            rating === "" ||
            stock === undefined ||
            stock === "" ||
            !Number.isFinite(discountNumber) ||
            discountNumber < 0 ||
            discountNumber > 100
        ) {
            return res.status(400).json({
                message: "Please provide valid product information.",
            });
        }

        const [result] = await pool.query(
            `INSERT INTO products (
                title,
                slug,
                description,
                price,
                discount,
                category,
                brand,
                image,
                rating,
                stock
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                slug,
                description,
                price,
                discountNumber,
                category,
                brand,
                image,
                rating,
                stock,
            ]
        );

        return res.status(201).json({
            message: "Product Created Successfully",
            id: result.insertId,
        });
    } catch (error) {
        console.error("Create Product Error:", error);

        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "This product slug already exists.",
            });
        }

        return res.status(500).json({
            message: "Could Not Create Product",
            error: error.message,
        });
    }
};


const ProductsRouterPutproduct = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            slug,
            description,
            price,
            discount,
            category,
            brand,
            rating,
            stock,
        } = req.body;

        const image = req.file ? req.file.filename : null;

        const [result] = await pool.query(
            `UPDATE products SET
                title = ?,
                slug = ?,
                description = ?,
                price = ?,
                discount = ?,
                category = ?,
                brand = ?,
                image = COALESCE(?, image),
                rating = ?,
                stock = ?
            WHERE id = ?`,
            [
                title,
                slug,
                description,
                price,
                discount,
                category,
                brand,
                image,
                rating,
                stock,
                id,
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Product Not Found",
            });
        }

        return res.json({
            message: "Product Updated Successfully",
        });
    } catch (error) {
        console.error("Update Product Error:", error);

        return res.status(500).json({
            message: "Could Not Update Product",
            error: error.message,
        });
    }
};

const ProductsRouterDeleteproduct = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM products WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Product Not Found",
            });
        }

        return res.json({
            message: "Product Deleted Successfully",
        });
    } catch (error) {
        console.error("Delete Product Error:", error);

        return res.status(500).json({
            message: "Could Not Delete Product",
        });
    }
};

const ProductsRouterGetProductBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        const [data] = await pool.query(
            "SELECT * FROM products WHERE slug = ?",
            [slug]
        );

        if (data.length === 0) {
            return res.status(404).json({
                message: "Product Not Found",
            });
        }

        return res.json(data[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Could Not Get Product",
        });
    }
};

module.exports = {
    ProductsRouterGetproducts,
    ProductsRouterGetproduct,
    ProductsRouterPostproduct,
    ProductsRouterPutproduct,
    ProductsRouterDeleteproduct,
    ProductsRouterGetProductBySlug
};