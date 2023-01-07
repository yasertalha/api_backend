const router = require("express").Router();
const dataController = require("../cotrollers/dataController");

router.post("/updateToken", dataController.updateToken);

module.exports = router;
