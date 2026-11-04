const isAdmin = (req, res, next) => {
    if (req.user?.username !== "HadiKarimiDev") {
        return res.status(403).json({ message: "Forbidden" })
    }

    next()
}

module.exports = isAdmin