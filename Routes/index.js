const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ res: "message received" }).status(200);
});



module.exports = router;
