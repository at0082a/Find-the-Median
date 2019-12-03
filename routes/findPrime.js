const express = require("express");
const router = express.Router();
const findMedian = require("../controller/magic");

router.get("/prime/:number", ( req, res) => {
  let number = req.params.number;
  let median = findMedian(number);
  res.send({data: median});
});