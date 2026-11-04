const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/products"),

    filename: (req, file, cb) => {
        cb(null, crypto.randomUUID() + path.extname(file.originalname));
    },
});

const uploadProducts = multer({ storage });

module.exports = uploadProducts;