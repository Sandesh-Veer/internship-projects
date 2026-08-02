const express = require("express");
const router = express.Router();
const{
    handleAddBookController,
    handlegetAllBookController,
    handleDeleteBookController
} = require("../controller/bookController");

router.get("/getmsg", (req, res) => {
    res.send("Hello");
});

router.post("/addbook", handleAddBookController);

router.get("/addbook", handlegetAllBookController);

router.delete("/addbook",handleDeleteBookController)

module.exports = router;