const express = require("express");
const router = express.Router();

const createUser = require("../../controllers/user");
const isAuth = require("../../middlewares/user_auth");
const checkStatus = require("../../middlewares/check_Status");
const upload = require("../../middlewares/multer");

// All routes
router.get("/", (req, res) => {
  res.send("welcome to user route");
});

router.post("/register",createUser.create);
router.post("/login", checkStatus, createUser.login);
router.get("/logout", isAuth, createUser.logout);
router.post("/refreshToken", createUser.refreshToken);
router.post("/updateuser", isAuth,createUser.updateUser);
router.post("/deactivate", isAuth,createUser.changeStatus);
router.post("/deleteuser", isAuth,createUser.deleteUser);
router.post("/upload",isAuth, upload.single("avatar"), createUser.uploadAvatar);



module.exports = router;
