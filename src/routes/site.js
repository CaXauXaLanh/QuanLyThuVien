const router = require("express").Router();
const siteController = require("../app/controllers/siteController");
const adminController = require("../app/controllers/manageAdmin");
const authController = require("../app/controllers/authController");

router.get("/delete/user/:userid", adminController.deleteUser);
router.get("/delete/book/:bookid", adminController.deleteBook);
router.get("/update/user/:userid", siteController.getUpdateUser)
router.get("/search", siteController.search);
router.post("/login", authController.userLogin);
router.get("/logout", authController.userLogout);
router.get("/", siteController.index);

module.exports = router;
