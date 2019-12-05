const express = require("express");
const router = express.Router();
const findMedian = require("../controller/findPrime");

router.get("/prime/:number", ( req, res) => {
  let number = Number.parseInt(req.params.number);
  let median = findMedian.sieve(number);
  console.log("this is mediannn", median);
  res.status(200).send({data: median});
});

module.exports = router;