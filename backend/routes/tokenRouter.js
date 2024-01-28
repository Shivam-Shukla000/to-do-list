const express = require("express");
const router = express.Router();
const { generateAccessToken } = require("../controllers/tokenCrontroller");
const { logout } = require("../controllers/tokenCrontroller");

router.post("/", generateAccessToken);
router.delete("/logout", logout);

module.exports = router;
