const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

//Home Route
app.get("/", (req, res) => {
  res.send("Sb shi h");
});

//Server listen on port 8080
app.listen(8080, () => console.log("Server is listening on port 8080"));
