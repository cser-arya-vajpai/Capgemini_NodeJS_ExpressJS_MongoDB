const express = require("express");
const router = express.Router();

const { register, verifyOtp, login, refreshToken } = require("../Controllers/authController");
const {protect, authorize}=require("../middleware/authMiddleware")

router.post("/register", register);
router.post("/verifyOtp", verifyOtp);
router.post("/login", login); 
router.post("/refreshToken", refreshToken);

router.get("/profile", protect, (req, res) => {
    res.status(200).json({
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    });
});
module.exports = router;
exports.protect = protect;
exports.authorize = authorize;