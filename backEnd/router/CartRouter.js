const express = require("express")
const auth = require("../middlewares/auth")
const { CartGet, CartAdd, CartUpdate, CartRemove } = require("../controller/CartController")

const CartRouter = express.Router()

CartRouter.use(auth)

CartRouter.get("/", CartGet)
CartRouter.post("/", CartAdd)
CartRouter.put("/:productId", CartUpdate)
CartRouter.delete("/:productId", CartRemove)

module.exports = CartRouter