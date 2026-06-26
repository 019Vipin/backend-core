const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const verify_user_mw=require("../middlewares/verifyUserreqBody");
router.post("/auth/signup",[verify_user_mw.verifyuserReqBody], authController.signup);

router.post("/auth/signin",authController.signin);
module.exports = router;