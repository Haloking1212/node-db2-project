const express = require("express");
const router = express.Router();
const db = require("../data/db-config.js");


router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: "failed to retrieve cars."})
    })
})

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars").insert(carData)
    .then(ids => {
        db("cars").where({ id: ids[0] })
        .then(newCar => {
            res.status(201).json(newCar);
        })
    })
    .catch(err => {
        console.log("POST ERROR", err);
        res.status(500).json({ message: "Failed to store data" })
    })
})

module.exports = router;