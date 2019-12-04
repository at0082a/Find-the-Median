const express = require("express");
const router = express.Router();
const findMedian = require("../controller/magic");

router.get("/prime/:number", ( req, res) => {
  let number = Number.parseInt(req.params.number);
  console.log(number);
  
  let median = findMedian(number);
  console.log("this is mediannn", median);
  res.send({data: median});
});

module.exports = router;