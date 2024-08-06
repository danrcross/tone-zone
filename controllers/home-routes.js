const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("p3");
});

// router.get("/2", (req, res) => {
//   res.render("p2");
// });
router.get("/3", (req, res) => {
  res.render("p3");
});

module.exports = router;
