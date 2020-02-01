const express = require("express");

const carsRouter = require("./cars/cars-router");

const server = express();
server.use(express.json());

server.use("/", carsRouter);

server.get("/", (req, res) => {
    res.send(`
    <h2>Node-db2-project</h2>
    `)
})

module.exports = server