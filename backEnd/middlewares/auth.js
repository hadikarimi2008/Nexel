const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        console.log("JWT error:", err.message)
        return res.status(401).json({ message: "Unauthorized" })
    }

    next()
}

module.exports = auth