const apiLimiter = require("../middleware/rateLimiter");
const express = require("express");
const v1Routes = require("./v1"); //Implement API Versioning: Version your API to maintain backwards compatibility:
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(apiLimiter);
router.use("/v1", v1Routes);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.use(authController.protect);

router.get("/me", authController.getMe);
router.patch("/updateMyPassword", authController.updatePassword);
router.patch("/updateMe", authController.updateMe);
router.delete("/deleteMe", authController.deleteMe);

module.exports = router;
