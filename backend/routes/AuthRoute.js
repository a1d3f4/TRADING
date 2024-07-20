const { Signup,rendersignup } = require("../Controllers/AuthController");
const router = require("express").Router();
router.get("/signup",rendersignup)
router.post("/signup", Signup);

module.exports = router;