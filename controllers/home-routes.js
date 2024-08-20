const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("p3");
});

// commenting out inactive routes; can be used for later versions
// router.get("/2", (req, res) => {
//   res.render("p2");
// });
// router.get("/3", (req, res) => {
//   res.render("p3");
// });

module.exports = router;
