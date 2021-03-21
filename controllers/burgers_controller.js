const express = require("express");
let router = express.Router();
const burger = require("../models/burger");


// router.get("/", function (req, res) {
//   burger.all(function (data) {
//     res.json(data);
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

router.get("/", function (req, res) {
  burger.all(response => {
    res.render("index", { burgers: response });
    console.log(response);
  });
});

router.post("/api/addburger", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/eatburger/:id/:devoured", function (req, res) {
  var burgerId = req.params.id;
  var devoured = req.params.devoured;

  console.log("burgerId=" + burgerId);

  burger.update(devoured, burgerId, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burger/:id", (req, res) => {
  burger.delete({ id: req.params.id }, data => {
    console.log(data);
    res.json(data);
  });
});


module.exports = router;