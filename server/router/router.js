const express = require("express");

const router = express.Router();
const {signUp, addpost,getProducts,login} = require("../controller/controller.js")

router.post("/signup",signUp)


router.post("/addpost",addpost)
router.get("/posts",getProducts)
router.post("/login", login)



module.exports = router;