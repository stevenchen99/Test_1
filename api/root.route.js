// Modules
const router = require("express").Router();
const control = require("./root.ctrl");

// router.get("/", control.rootGet);
router.post("/", control.rootPost);

module.exports = router;
