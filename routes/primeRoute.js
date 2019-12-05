const express = require("express");
const router = express.Router();
const findMedian = require("../controller/findPrime");

router.get("/prime/:number", ( req, res) => {
  try {
    let number = Number.parseInt(req.params.number);
    let median = findMedian.sieve(number);
    res.status(200).send({data: median});
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;