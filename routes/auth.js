var express = require('express');
const { check } = require('express-validator');
var router = express.Router()
const { signout, signup, signin } = require("../controllers/auth")

router.post("/signup",[
    check("name", "Name should be at least 3 char").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 3 char").isLength({ min: 3})
], signup);

router.post("/signin",[
    check("email", "Email is required").isEmail(),
    check("password", "Password field is required").isLength({ min: 3})
], 
signin);

router.get("/signout", signout);

module.exports = router;