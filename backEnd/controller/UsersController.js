const pool = require("../database/MySqlDataBase")
const joi = require("joi")

const jwt = require("jsonwebtoken")

const registerSchema = joi.object({
    name: joi.string().min(2).max(30).required(),
    family: joi.string().min(2).max(30).required(),
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(30).required(),
})

const UserRouterGetUsers = async (req, res) => {
    const [users] = await pool.query("select * from users")
    res.json(users)
}

const UserRouterGetUser = async (req, res) => {
    const { id } = req.params
    const [user] = await pool.query("select * from users where id = ?", [id])
    res.send(user[0])
}


const UserRouterPutUser = async (req, res) => {
    const { id } = req.params
    const { name, family, username, password } = req.body
    const image = req.file?.filename ?? null

    await pool.query(
        `update users
         set name = ?, family = ?,
             username = ?,
             password = coalesce(?, password),
             image = coalesce(?, image)
         where id = ?`,
        [name, family, username, password || null, image, id]
    )

    res.json({ id: Number(id), name, family, username })
}

const UserRouterloginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const [rows] = await pool.query(
            "SELECT id, name, family, username FROM users WHERE username = ? AND password = ?",
            [username, password]
        );

        if (rows.length === 0) {
            return res.status(401).json({
                message: "Invalid username or password",
            });
        }

        const user = rows[0];

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.json({ token, user });

    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            message: "Login failed.",
            error: error.message,
        });
    }
};

const UserRouterregisterUser = async (req, res) => {
    try {
        const { name, family, username, password } =
            await registerSchema.validateAsync(req.body);

        const [result] = await pool.query(
            "INSERT INTO users (name, family, username, password) VALUES (?, ?, ?, ?)",
            [name, family, username, password]
        );

        return res.status(201).json({
            message: "Account created successfully",
            id: result.insertId,
            name,
            family,
            username,
        });

    } catch (error) {
        console.error("Register Error:", error);

        if (error.isJoi) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }

        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                message: "This username already exists.",
            });
        }

        return res.status(500).json({
            message: "Could not create account.",
            error: error.message,
        });
    }
};

const UserRouterDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const [users] = await pool.query(
            "SELECT id, username FROM users WHERE id = ?",
            [id]
        );

        if (users.length === 0) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }

        if (users[0].username === "HadiKarimiDev") {
            return res.status(403).json({
                message: "You cannot delete the admin account.",
            });
        }

        const [result] = await pool.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }

        return res.json({
            message: "User Deleted Successfully",
        });
    } catch (error) {
        console.error("Delete User Error:", error);

        if (error.code === "ER_ROW_IS_REFERENCED_2") {
            return res.status(409).json({
                message: "This user has related records and cannot be deleted.",
            });
        }

        return res.status(500).json({
            message: "Could Not Delete User",
        });
    }
};



module.exports = {
    UserRouterGetUsers,
    UserRouterGetUser,
    UserRouterPutUser,
    UserRouterloginUser,
    UserRouterregisterUser,
    UserRouterDeleteUser
}