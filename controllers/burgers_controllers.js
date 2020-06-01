const express = require ("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", async (req, res) => {

    // call out to burger.js  "MODEL"
    // burger.js uses orm to make call to db
    // and return the requested info to data
    const data = await burger.all();
    //console.log(data);
  
    // now we pass that data to handlebars  "VIEW"
    // 
    res.render("index", { burgers: data });
  });


  router.post("/api/burgers/", async (req, res) => {

    const data = await burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured]);
    res.json({id: data.insertId});
    //res.json({ id: data.insertId });
    //router.get();
  });

  router.put("/api/burgers/:id", async (req, res) => {
    let id = "id="+req.params.id;
    let devoured = req.body.devoured;
    // console.log("id" +id);
    // console.log("devoured" +devoured);

    const data = await burger.update({devoured: devoured},id);
    res.status(200).end();
    
    //res.json({ id: data.insertId });
    //router.get();
  });



module.exports = router;