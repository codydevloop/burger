const express = require ("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {

    // call out to burger.js  "MODEL"
    // burger.js uses orm to make call to db
    // and return the requested info to data
    const data = await burger.all();
  

    // now we pass that data to handlebars  "VIEW"
    // 
    res.render("index", { burger: data });
  });



module.exports = router;