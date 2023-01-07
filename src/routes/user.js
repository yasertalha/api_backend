const router = require("express").Router();
const userController = require("../cotrollers/userController");

router.post("/signUp", userController.setUser);
router.post("/updateToken", userController.updateToken);
router.get("/allUsers", userController.allUsers);
router.get("/:id", userController.getUser);

module.exports = router;
