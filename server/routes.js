const router = require("express").Router();
const db = require("../models");


router
  .get("/", (req, res, next) => {
    res.json({
      message: "This is the Get /Api Route."
    })
  })
  .get("/Meals", (req, res, next) => {
    db.meals.findAll({})
      .then(data=>data.map(i=>i.dataValues))
      .then(data=>res.json({meals:data}))

    // res.json({db: db})
  })

module.exports = router;