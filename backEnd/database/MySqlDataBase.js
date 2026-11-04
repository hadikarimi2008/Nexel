const mysql = require("mysql2")
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
}).promise()


// pool.query("SELECT 1")
//     .then(() => {
//         console.log("DB connected")
//         process.exit()
//     })
//     .catch((err) => {
//         console.log("DB error:", err.message)
//         process.exit()
//     })

module.exports = pool