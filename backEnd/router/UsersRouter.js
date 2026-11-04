const express = require("express");
const UserRouter = express.Router();

const uploadUsers = require("../middlewares/uploadUsers");

const {
    UserRouterGetUsers,
    UserRouterGetUser,
    UserRouterPutUser,
    UserRouterloginUser,
    UserRouterregisterUser,
    UserRouterDeleteUser,
} = require("../controller/UsersController");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

UserRouter.get("/", auth, isAdmin, UserRouterGetUsers);
UserRouter.get("/:id", auth, UserRouterGetUser);
UserRouter.post("/login", UserRouterloginUser);
UserRouter.post("/register", UserRouterregisterUser);
UserRouter.delete("/:id", auth, isAdmin, UserRouterDeleteUser);
UserRouter.put("/:id", auth, uploadUsers.single("image"), UserRouterPutUser);

module.exports = UserRouter;