const express = require('express');
const path = require("path");
const apiRouter = require("./routes");
const webServer = express();

webServer
  .use(express.static(path.join(__dirname,"../public")))
  .use("/Api",apiRouter)
  .use((req,res,next) => {
    const err = new Error("resource not found");
    err.status = 404;
    next(err);
  })
  .use((err,req,res,next) => {
    res.json(err);
  })

module.exports = webServer;