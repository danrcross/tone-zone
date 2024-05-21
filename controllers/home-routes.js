const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/2", (req, res) => {
  res.render("p2");
});

module.exports = router;
