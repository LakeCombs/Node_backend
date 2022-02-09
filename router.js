const express = require("express");
const { getName, postName, getFriends } = require("./controller");

const router = express.Router();

router.get("/", getFriends);
router.get("/name", getName);
router.post("/", postName);

module.exports = router;
