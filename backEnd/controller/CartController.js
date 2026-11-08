const pool = require("../database/MySqlDataBase")

const CartGet = async (req, res) => {
    const [rows] = await pool.query(
        "select c.product_id, c.quantity, p.title, p.price, p.image from cart_items c join products p on p.id = c.product_id where c.user_id = ?",
        [req.user.id]
    )
    res.json(rows)
}

const CartAdd = async (req, res) => {
    const { productId } = req.body
    await pool.query(
        "insert into cart_items (user_id, product_id) values (?, ?) on duplicate key update quantity = quantity + 1",
        [req.user.id, productId]
    )
    res.json({ message: "added" })
}

const CartUpdate = async (req, res) => {
    const { quantity } = req.body
    await pool.query(
        "update cart_items set quantity = ? where user_id = ? and product_id = ?",
        [quantity, req.user.id, req.params.productId]
    )
    res.json({ message: "updated" })
}

const CartRemove = async (req, res) => {
    await pool.query(
        "delete from cart_items where user_id = ? and product_id = ?",
        [req.user.id, req.params.productId]
    )
    res.json({ message: "removed" })
}

module.exports = { CartGet, CartAdd, CartUpdate, CartRemove }