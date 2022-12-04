var express = require("express");
var router = express.Router();

const {
  allMeters,
  enterReading,
  updateReading,
  deleteReading
} = require("../controllers/meter");

router.get("/all_meters", allMeters);
router.post("/enter_reading", enterReading);
router.put("/update_reading", updateReading);
router.delete("/delete_reading", deleteReading);

module.exports = router;
