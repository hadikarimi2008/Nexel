require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const UserRouter = require("./router/UsersRouter");
const ProductsRouter = require("./router/ProductsRouter");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

app.use("/api/users", UserRouter);
app.use("/api/products", ProductsRouter)

const port = process.env.App_Port || 4000;

app.listen(port, () => {
    console.log(`Server On In Port: ${port}`);
});