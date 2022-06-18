const router = require("express").Router();
// router will be here
router.get("/", (req, res) => {
  res.send("welcome to the home page");
});

module.exports = router;
