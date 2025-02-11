const express = require("express");
const { register, login } = require("../controller/user_control");

const router = express.Router();

router.post("/users/register", register);
router.route("/users/login").post(login);
//router.post("/users/login", login);

module.exports = router;
