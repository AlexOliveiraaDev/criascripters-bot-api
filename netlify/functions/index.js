const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  console.log("Teste!");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is what will be returned!",
    }),
  };
});

module.exports.handler = serverless(app);
