const express = require("express");
const router = express.Router();

const { addbook } = require("../controller/bookcontroller");

router.post("/AddBook", addbook);

module.exports = router;