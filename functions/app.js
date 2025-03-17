const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Teste!");
});

module.exports.handler = serverless(app);
